import { FC, HTMLAttributes, useRef, useState } from "react";
import { GestureEvent, Touch } from "components";

import { classes, clamp } from "utils";

import "./ModalPanel.css";

interface ModalPanel extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  onClick?: () => void;
  mode?: "panel" | "card";
  color?: string;
  snow?: boolean;
};

const ModalPanel: FC<ModalPanel> = ({
  onClick,
  children,
  color,
  snow,
  mode = "panel"
}) => {

  const safe = useRef({
    top: Number(document.body.style.getPropertyValue("--safe-area-inset-top")),
    bottom: Number(document.body.style.getPropertyValue("--safe-area-inset-bottom"))
  }).current;

  const container = useRef<HTMLDivElement>(null);
  const [store, setStore] = useState({
    anim: false,
    among: 0
  })

  const handlerClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick && onClick();
  }

  const Start = (event: GestureEvent) => setStore({
    anim: false,
    among: store.among
  })

  const Move = (event: GestureEvent) => {

    const target = event.originalEvent.currentTarget as HTMLDivElement;
    if (!target || !target.parentElement) { return }

    const element = container.current
    if (!element) { return }

    const value = (event.shiftY || 0 + 2);
    const clampTop = element.clientHeight - target.parentElement.clientHeight;

    if (value > 0) {
      setStore({
        anim: store.anim,
        among: clamp(value, 0, (target.parentElement.clientHeight - (safe.bottom)))
      })
    }

    if (value < 0) {
      setStore({
        anim: store.anim,
        among: clamp(value / 4, -clampTop + (safe.bottom), 0)
      })
    }

  }

  const End = (event: GestureEvent) => {

    if (store.among > 50 || store.among === 24) {
      onClick && onClick();
      return;
    }

    setStore({
      anim: true,
      among: 0
    })

  }

  const resetTouches = (event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  }

  return (
    <div className={classes("ModalPanel", {
      "ModalPanel--animation": store.anim,
      "ModalPanel--card": mode === "card",
      "ModalPanel--panel": mode === "panel",
      "ModalPanel--snow": snow === true
    })}
      onClick={handlerClose}
    >
      <div
        ref={container}
        className={"ModalPanel__inner"}
      >

        <div
          className={"ModalPanel__content"}
          style={{
            transform: `translateY(${(store.among)}px)`,
            background: "transparent"
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >

          <Touch
            className={"ModalPanel__header"}
            onStartY={Start}
            onMoveY={Move}
            onEndY={End}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            style={{
              background: snow ? "transparent" : (color || "white")
            }}
          >
          </Touch>

          <div
            className={"ModalPanel__children"}
            onClick={resetTouches}
          >
            <div className={"ModalPanel__scroll"} style={{
              background: color || "white"
            }}>
              {children}
            </div>
          </div>
        </div>

        <div className={"ModalPanel__background"}>
          <div
            className={"ModalPanel__after"}
            style={{
              transform: `translateY(${(store.among - 2)}px)`,
              backgroundColor: color || "white"
            }}
          />
        </div>

      </div >
    </div >
  )

}

export default ModalPanel;

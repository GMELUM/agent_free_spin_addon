import {
  Children,
  FC,
  HTMLAttributes,
  ReactElement,
  useEffect,
  useMemo,
  useState
} from "react";

import { classes } from "utils";

import "./Modal.css";

interface Modal extends HTMLAttributes<HTMLDivElement> {
  activeModal: string;
};

const Modal: FC<Modal> = ({
  activeModal,
  children,
  className
}) => {

  const childs = useMemo(() => Children.toArray(children) as ReactElement[], []);

  const [store, setStore] = useState({
    to: "up",
    active: activeModal,
    show: false,
    anim: false,
    clear: !activeModal
  })

  const active = useMemo(() => childs.find((elem) => (elem as any).props.nav === store.active), [activeModal, store.active]);

  useEffect(() => {

    if (!store.anim) {

      //* Открытие модалки */
      if (!store.active && !!activeModal) {
        setStore({
          to: "up",
          active: activeModal,
          show: store.show,
          anim: true,
          clear: false
        })
        return;
      }

      //* Закрываем модалку */
      if (!!store.active && !activeModal) {
        setStore({
          to: "down",
          active: store.active,
          anim: true,
          show: store.show,
          clear: false
        })
        return;
      }

      //* Смена модалки */
      if (store.active != activeModal) {
        setStore({
          to: "down",
          active: store.active,
          anim: true,
          show: store.show,
          clear: false
        })
        return;
      }

    }
  }, [activeModal])

  const handlerSwap = (event: any) => {
    if (store.to === "down") {
      setStore({
        to: "down",
        active: activeModal,
        anim: false,
        show: store.show,
        clear: !activeModal
      })
    }
    if (store.to === "up") {
      setStore({
        to: "up",
        active: store.active,
        anim: false,
        show: store.show,
        clear: store.clear
      })
    }
  }

  if (store.clear) { return null }

  return (
    <div
      className={classes("Modal", {
        "Modal--to-up": store.to === "up",
        "Modal--to-down": store.to === "down",
        "Modal--show": store.show,
        [`${className}`]: !!className
      })}
    >
      <div className={"Modal__inner"}>
        <div
          key={store.active}
          className={"Modal__container"}
          onAnimationEnd={handlerSwap}
        >{active}</div>
      </div>
    </div>
  )
}

export default Modal;

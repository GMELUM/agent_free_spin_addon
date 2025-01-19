import { FC, HTMLAttributes, memo, useRef, useState } from "react";
import { classes } from "../../utils";

import style from "./ButtonSpin.module.css";
import {
  ButtonSpinFooter,
  ButtonSpinHeader,
  ButtonSpinLite,
  ButtonSpinMain,
} from "FreeSpin/source";

interface ButtonSpin extends HTMLAttributes<HTMLDivElement> {
  /**
   * true - Активен
   * false - не Активен
   */
  onStatus?: (status: boolean) => void;
}

const isTouchSupport = window && "ontouchstart" in window;

const ButtonSpin: FC<ButtonSpin> = ({
  onStatus,
  className,
  children,
  ...prevProps
}) => {
  const [active, setActive] = useState(false);
  const time = useRef(new Date());

  const onStart = () => {
    time.current = new Date(Date.now() + 2_000);
    setActive(true);
    onStatus?.(true);
  };
  const onEnd = () => {
    if (time.current.getTime() <= Date.now()) return;
    setActive(false);
    onStatus?.(false);
  };

  const mouseEvent = {
    onMouseDown: onStart,
    onMouseUp: onEnd,
  };

  const touchEvent = {
    onTouchStart: onStart,
    onTouchEnd: onEnd,
  };

  return (
    <div
      {...prevProps}
      className={classes(style.ButtonSpin, {
        [style[`ButtonSpin--active`]]: active,
      })}
      {...(isTouchSupport ? touchEvent : mouseEvent)}
    >
      <span className={style.ButtonSpin__header}>
        <ButtonSpinHeader />
      </span>
      <span className={style.ButtonSpin__main}>
        <ButtonSpinMain />
      </span>
      <span className={style.ButtonSpin__footer}>
        <ButtonSpinFooter />
      </span>
      <span className={style.ButtonSpin__light}>
        <ButtonSpinLite />
      </span>
    </div>
  );
};

export default memo(ButtonSpin);

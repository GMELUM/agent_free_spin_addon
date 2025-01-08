import { FC, HTMLAttributes, memo, useEffect, useRef, useState } from "react";
import { classes } from "utils";

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

const ButtonSpin: FC<ButtonSpin> = ({
  onStatus,
  className,
  children,
  ...prevProps
}) => {
  const [active, setActive] = useState(false);
  const time = useRef(new Date());

  const onStart = () => {
    time.current = new Date(Date.now() + 3_000);
    setActive(true);
    onStatus?.(true);
  };
  const onEnd = () => {
    if (time.current.getTime() <= Date.now()) return;
    setActive(false);
    onStatus?.(false);
  };

  return (
    <div
      {...prevProps}
      className={classes(style.ButtonSpin, {
        [style[`ButtonSpin--active`]]: active,
      })}
      onTouchStart={onStart}
      onTouchEnd={onEnd}
      onMouseUp={onEnd}
      onMouseDown={onStart}
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

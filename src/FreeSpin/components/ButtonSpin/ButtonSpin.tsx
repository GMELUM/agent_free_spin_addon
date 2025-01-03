import { FC, HTMLAttributes, memo, useEffect, useState } from "react";
import { classes } from "utils";

import style from "./ButtonSpin.module.css";
import { ButtonSpinLite } from "FreeSpin/source";

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

  const onStart = () => {
    setActive(true);
    onStatus?.(true);
  };
  const onEnd = () => {
    setActive(false);
    onStatus?.(false);
  };

  return (
    <div
      {...prevProps}
      className={classes(style.ButtonSpin, {})}
      onTouchStart={onStart}
      onTouchEnd={onEnd}
      onMouseUp={onEnd}
      onMouseDown={onStart}
    >
      <div
        className={classes(style.ButtonSpin__in, {
          [style[`ButtonSpin__in--active`]]: active,
        })}
      >
        <div className={style.ButtonSpin__one}>
          <span className={style.ButtonSpin__one_spin}>
            <div className={style.ButtonSpin__two}>
              <span className={style.ButtonSpin__two_spin}>SPIN</span>
              <div className={style.ButtonSpin__two_block}></div>
            </div>
          </span>
          <div className={style.ButtonSpin__one_block}>
            Hold to turn on auto-spin
            <span className={style.ButtonSpin__light}>
              <ButtonSpinLite />
            </span>
          </div>
          <div className={style.ButtonSpin__text}>
            Hold to turn on auto-spin
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ButtonSpin);

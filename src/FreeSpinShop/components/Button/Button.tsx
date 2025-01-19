import { FC, HTMLAttributes, memo } from "react";
import { classes } from "../../utils";

import style from "./Button.module.css";

interface Button extends HTMLAttributes<HTMLDivElement> {
  description?: React.ReactNode;
  appearance?: "secondary" | "gold";
}

const Button: FC<Button> = ({
  appearance = "secondary",
  description,
  className,
  children,
  ...prevProps
}) => (
  <div
    {...prevProps}
    className={classes(style.Button, {
      [`${className}`]: !!className,
      [style[`Button__appearance--secondary`]]: appearance === "secondary",
      [style["Button__appearance--gold"]]: appearance === "gold",
    })}
  >
    <span className={style.Button__in}>{children}</span>
    <span className={style.Button__description}>{description}</span>
  </div>
);

export default memo(Button);

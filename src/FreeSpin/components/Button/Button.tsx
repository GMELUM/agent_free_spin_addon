import { FC, HTMLAttributes, memo } from "react";
import { classes } from "utils";

import style from "./Button.module.css";

interface Button extends HTMLAttributes<HTMLDivElement> {
  before?: React.ReactNode;
  after?: React.ReactNode;

  textSize?: "medium" | "large";
  size?: "small" | "medium";
  appearance?: "secondary" | "white";

  stretched?: boolean;
}

const Button: FC<Button> = ({
  size = "medium",
  textSize = "medium",
  appearance = "secondary",
  stretched,
  before,
  after,
  className,
  children,
  ...prevProps
}) => (
  <div
    {...prevProps}
    className={classes(style.Button, {
      [`${className}`]: !!className,
      [style[`Button--stretched`]]: !!stretched,
      [style[`Button__size--small`]]: size === "small",
      [style["Button__size--medium"]]: size === "medium",

      [style[`Button__textSize--medium`]]: textSize === "medium",
      [style["Button__textSize--large"]]: textSize === "large",

      [style[`Button__appearance--secondary`]]: appearance === "secondary",
      [style["Button__appearance--white"]]: appearance === "white",
    })}
  >
    {before && <span className={style.Button__before}>{before}</span>}
    <span className={style.Button__in}>{children}</span>
    {after && <span className={style.Button__after}>{after}</span>}
  </div>
);

export default memo(Button);

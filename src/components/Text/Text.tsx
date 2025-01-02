import { FC, HTMLAttributes } from "react";
import { classes } from "utils";

import style from "./Text.module.css";

interface IText extends HTMLAttributes<HTMLSpanElement> {
  weight?: "light" | "normal" | "bold";
  size?: "small" | "normal" | "medium" | "large";
  transform?: "lowercase" | "uppercase" | "normal";
};

const Text: FC<IText> = ({
  weight = "normal",
  size = "normal",
  transform = "normal",
  className,
  children,
  ...prevProps
}) => <span {...prevProps} className={classes(style.Text, {
  [style[`Text_weight--${weight}`]]: true,
  [style[`Text_size--${size}`]]: true,
  [style[`Text_transform--${transform}`]]: true,
  [`${className}`]: !!className
})}>{children}</span>


export default Text;
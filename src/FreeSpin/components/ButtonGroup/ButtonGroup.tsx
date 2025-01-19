import { FC, HTMLAttributes } from "react";
import { classes } from "../../utils";

import style from "./ButtonGroup.module.css";

interface Container extends HTMLAttributes<HTMLDivElement> {}

const Container: FC<ButtonGroup> = ({ className, children, ...prevProps }) => (
  <div
    {...prevProps}
    className={classes(style.ButtonGroup_Container, {
      [`${className}`]: !!className,
    })}
  >
    {children}
  </div>
);

interface ButtonGroup extends HTMLAttributes<HTMLDivElement> {}

const ButtonGroup: FC<ButtonGroup> & {
  Container: typeof Container;
} = ({ className, children, ...prevProps }) => (
  <div
    {...prevProps}
    className={classes(style.ButtonGroup, {
      [`${className}`]: !!className,
    })}
  >
    {children}
  </div>
);

ButtonGroup.Container = Container;

export default ButtonGroup;

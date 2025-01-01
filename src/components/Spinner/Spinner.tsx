import { FC, HTMLAttributes, memo } from 'react';
import { classes } from 'engine';

import style from "./Spinner.module.css";

interface Spinner extends HTMLAttributes<HTMLDivElement> {
  size?: "small" | "regular" | "large" | "medium" | "auto";
};

const Spinner: FC<Spinner> = ({
  size = "regular",
  className,
  ...prevProps
}) => (
  <div {...prevProps} className={classes(style.Spinner, {
    [`${className}`]: !!className,
    [style[`Spinner--small`]]: size === "small",
    [style['Spinner--regular']]: size === "regular",
    [style['Spinner--large']]: size === "large",
    [style['Spinner--medium']]: size === "medium",
    [style['Spinner--auto']]: size === "auto"
  })}>
    <svg viewBox="0 0 50 50" >
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  </div>
)

export default memo(Spinner);
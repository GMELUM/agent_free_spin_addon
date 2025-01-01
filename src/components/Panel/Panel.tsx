import {
  FC,
  ReactNode,
  useRef,
  HTMLAttributes,
} from "react";
import { classes } from "utils";

import style from "./Panel.module.css";

interface IPanel extends HTMLAttributes<HTMLDivElement> {
  nav: string;
  header?: ReactNode;
  footer?: ReactNode;
  fixed?: boolean;
  safeTop?: boolean;
  safeBottom?: boolean;
  lazy?: boolean;
  onLazy?: () => void;
  isTop?: boolean;
  onTop?: (value: boolean) => void;
};

const Panel: FC<IPanel> = ({
  nav,
  header,
  footer,
  fixed,
  className,
  safeTop = true,
  safeBottom = true,
  children
}) => {

  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div className={classes(style.Panel, className)}>
      {safeTop && <div className={style.Panel__before}></div>}
      <div className={style.Panel__header}>{header}</div>
      <div
        ref={panelRef}
        className={classes(style.Panel__outer, {
          [style.Panel__overflow]: !fixed
        })}>
        <div className={style.Panel__inner}>{children}</div>
      </div>
      <div className={style.Panel__footer}>{footer}</div>
      {safeBottom && <div className={style.Panel__after}></div>}
    </div>
  )

}

export default Panel;

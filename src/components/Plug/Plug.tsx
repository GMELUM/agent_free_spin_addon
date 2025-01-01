import { FC, HTMLAttributes, ReactNode } from "react";
import Text from "../Text/Text";

import style from "./Plug.module.css";
import { classes } from "utils";

interface IPlug extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  header?: ReactNode;
  action?: ReactNode;
  mode?: "center" | "lower" | "mini";
};

const Plug: FC<IPlug> = ({
  icon,
  header,
  action,
  mode = "center",
  children
}) => {
  return (
    <div className={classes(style.Plug, {
      [style[`Plug_mode-center`]]: mode === "center",
      [style[`Plug_mode-lower`]]: mode === "lower",
      [style[`Plug_mode-mini`]]: mode === "mini"
    })}>
      {icon && <div className={style.Plug_icon}>{icon}</div>}
      {header && <div className={style.Plug_header}><Text size="medium">{header}</Text></div>}
      {children && <div className={style.Plug_children}>{children}</div>}
      {action && <div className={style.Plug_action}>{action}</div>}
    </div>
  )
}

export default Plug;

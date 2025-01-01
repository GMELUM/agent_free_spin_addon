import { FC, HTMLAttributes } from "react";
import { classes } from "utils";

import style from "./ModalBlock.module.css";

interface IModalBlock extends HTMLAttributes<HTMLDivElement> { };

const ModalBlock: FC<IModalBlock> = ({
  className,
  children
}) => {
  return (
    <div className={style.ModalBlock}>
      <div className={classes(style.ModalBlock__inner, className)}>
        {children}
      </div>
    </div>
  )
}

export default ModalBlock;

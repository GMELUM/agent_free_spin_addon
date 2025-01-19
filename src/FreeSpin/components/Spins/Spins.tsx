import { FC, HTMLAttributes, memo } from "react";

import { IconSpin } from "../../source";
import Button from "../Button/Button";

import style from "./Spins.module.css";

interface Spins extends HTMLAttributes<HTMLDivElement> {
  count: number;

  /** Событие Buy spins */
  onClick: () => void;
}

const Spins: FC<Spins> = ({ count = 0, onClick, ...prevProps }) => (
  <div {...prevProps} className={style.Spins}>
    <span className={style.Spins__before}>
      <span className={style["Spins__before--secondary"]}>You have&nbsp;</span>
      <span className={style["Spins__before--accent"]}>{count} spins</span>
      <span className={style["Spins__before_icon"]}>
        <IconSpin width={20} height={20} />
      </span>
    </span>
    <span className={style.Spins__after}>
      <Button onClick={onClick} appearance={"white"} size={"small"}>
        Buy spins
      </Button>
    </span>
  </div>
);

export default memo(Spins);

import { FC, HTMLAttributes, memo } from "react";

import { IconSpin } from "../../source";
import Button from "../Button/Button";

import style from "./Spins.module.css";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import formatNumberWithCommas from "FreeSpin/utils/formatNumberWithCommas";

interface Spins extends HTMLAttributes<HTMLDivElement> {
  count: number;
  jackpot?: number | false;

  /** Событие Buy spins */
  onClick: () => void;
}

const Spins: FC<Spins> = ({
  count = 0,
  onClick,
  jackpot = false,
  ...prevProps
}) => (
  <>
    {jackpot !== false && (
      <ButtonGroup>
        <ButtonGroup.Container>
          <Button stretched textSize={"large"} className={style.Spins__jackpot}>
            JACKPOT{" "}
            <span className={style.Spins__jackpot_text}>
              {formatNumberWithCommas(jackpot)}
            </span>{" "}
            AP
          </Button>
        </ButtonGroup.Container>
      </ButtonGroup>
    )}
    <div {...prevProps} className={style.Spins}>
      <span className={style.Spins__before}>
        <span className={style["Spins__before--secondary"]}>
          You have&nbsp;
        </span>
        <span className={style["Spins__before--accent"]}>{count} spins</span>
        <span className={style["Spins__before_icon"]}>
          <IconSpin />
        </span>
      </span>
      <span className={style.Spins__after}>
        <Button onClick={onClick} appearance={"white"} size={"small"}>
          Buy spins
        </Button>
      </span>
    </div>
  </>
);

export default memo(Spins);

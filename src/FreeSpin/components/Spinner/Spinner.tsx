import { FC, HTMLAttributes, memo, useEffect, useState } from "react";
import { classes } from "utils";

import style from "./Spinner.module.css";
import AspectRation from "../AspectRation/AspectRation";
import Slot, { Symbols } from "./Slot";
import Button from "../Button/Button";
import CoinsBurstEffect from "../CoinsBurstEffect/CoinsBurstEffect";

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  symbols: Symbols;
  combination: [string, string, string];
  prize?: string;
  onExecute: () => void;
  onRate: (rate: string) => string;
}

const Spinner: FC<SpinnerProps> = ({
  symbols,
  combination,
  prize,
  onExecute,
  onRate,
  ...prevProps
}) => {
  const [rate, setRate] = useState(onRate(""));
  const [canStopArray, setCanStopArray] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [finishedSlots, setFinishedSlots] = useState<number[]>([]);
  const [hash, setHash] = useState(Math.floor(Math.random() * 1e5));

  useEffect(() => {
    setCanStopArray([false, false, false]);
    setFinishedSlots([]);
    setHash(Math.floor(Math.random() * 1e5));
    const timer = setTimeout(() => {
      setCanStopArray((prev) =>
        prev.map((_, idx) => (idx === 0 ? true : false)),
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [combination]);

  useEffect(() => {
    if (finishedSlots.length > 0 && finishedSlots.length < 3) {
      const nextIndex = finishedSlots.length;
      setCanStopArray((prev) =>
        prev.map((_, idx) => idx === nextIndex || prev[idx]),
      );
    }

    if (finishedSlots.length === 3) {
      onExecute && onExecute();
      setTimeout(() => {
        setCanStopArray([false, false, false]);
        setFinishedSlots([]);
      }, 1000);
    }
  }, [finishedSlots]);

  const handleSlotChange = (index: number) => {
    setFinishedSlots((prev) => [...prev, index]);
  };

  return (
    <div {...prevProps} className={classes(style.Spinner, {})}>
      <div className={style.Spinner_outer}>
        <AspectRation width={10} height={11}>
          <div className={style.Spinner_prize}>
            <div className={style.Spinner_prize_container}>
              <div className={style.Spinner_prize_cell}>
                <Button stretched textSize={"medium"}>
                  {prize}
                </Button>
              </div>
            </div>
          </div>
          <div className={style.Spinner_inner}>
            {combination.map((item, index) => (
              <div key={index} className={style.Spinner_cell}>
                <Slot
                  hash={hash}
                  symbols={symbols}
                  change={item}
                  canStop={canStopArray[index]}
                  onChange={() => handleSlotChange(index)}
                />
              </div>
            ))}

            <div className={style.Spinner_bg} />

            <div className={style.Spinner_rate}>
              <div className={style.Spinner_rate_outer}>
                <Button
                  onClick={() => {
                    setRate((rate) => onRate(rate));
                  }}
                  stretched
                  textSize={"medium"}
                >
                  {rate}
                </Button>
                {/* <div className={style.Spinner_rate_inner}>SPIN X1000</div> */}
              </div>
            </div>
          </div>
        </AspectRation>
      </div>
    </div>
  );
};

export default memo(Spinner);

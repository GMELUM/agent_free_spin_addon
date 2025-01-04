import { FC, HTMLAttributes, memo, useEffect, useState } from "react";
import { classes } from "utils";

import style from "./Spinner.module.css";
import AspectRation from "../AspectRation/AspectRation";
import Slot, { Symbols } from "./Slot";

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    symbols: Symbols;
    combination: [string, string, string];
}

const Spinner: FC<SpinnerProps> = ({
    symbols,
    combination,
    ...prevProps
}) => {
    const [canStopArray, setCanStopArray] = useState<boolean[]>([false, false, false]);
    const [finishedSlots, setFinishedSlots] = useState<number[]>([]);

    useEffect(() => {
        setCanStopArray([false, false, false]);
        setFinishedSlots([]);
        const timer = setTimeout(() => {
            setCanStopArray((prev) => prev.map((_, idx) => (idx === 0 ? true : false)));
        }, 1000);

        return () => clearTimeout(timer);
    }, [combination]);

    useEffect(() => {
        if (finishedSlots.length > 0 && finishedSlots.length < 3) {
            const nextIndex = finishedSlots.length;
            setCanStopArray((prev) => prev.map((_, idx) => idx === nextIndex || prev[idx]));
        }

        if (finishedSlots.length === 3) {
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
                            <div className={style.Spinner_prize_cell}></div>
                        </div>
                    </div>
                    <div className={style.Spinner_inner}>

                        {combination.map((item, index) => (
                            <div key={index} className={style.Spinner_cell}>
                                <Slot
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
                                <div className={style.Spinner_rate_inner}>SPIN X1000</div>
                            </div>
                        </div>
                    </div>
                </AspectRation>
            </div>
        </div>
    );
};

export default memo(Spinner);

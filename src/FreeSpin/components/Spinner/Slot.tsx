import React, { CSSProperties, ReactElement, useEffect, useMemo, useState } from "react";
import styles from "./slot.module.css";
import { classes } from "../../utils";

export type Symbols = Array<{
    key: string;
    element: ReactElement;
}>;

interface SlotProps {
    symbols: Symbols;
    change: string;
    onChange: (key: string) => void;
    canStop?: boolean;
}

const Slot: React.FC<SlotProps> = ({
    symbols,
    change,
    onChange,
    canStop = true,
}) => {

    const [state, setState] = useState({
        index: 0,
        active: true,
        end: false,
        changedKey: null as string | null,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setState((prevState) => {
                if (!state.active) return prevState;

                const nextIndex = (prevState.index + 1) % symbols.length;
                const currentIndex = (prevState.index) % symbols.length;

                if (symbols[nextIndex].key === change && canStop) {
                    return {
                        ...prevState,
                        index: nextIndex,
                        active: false,
                        changedKey: symbols[nextIndex].key,
                    };
                } else if (symbols[currentIndex].key === change && canStop) {

                }

                return { ...prevState, index: nextIndex, end: false };
            });
        }, 69);

        return () => clearInterval(interval);
    }, [state.active, canStop, change, symbols]);

    useEffect(() => {
        if (state.changedKey) {
            onChange(state.changedKey);
            setState((prevState) => ({ ...prevState, changedKey: null, end: true }));
        }
    }, [state.changedKey, onChange]);

    useEffect(() => {
        setState((prevState) => ({ ...prevState, active: true, changedKey: null }));
    }, [change]);

    const createPosition = (cellIndex: number): CSSProperties => [
        {
            transform: `translateY(-100%)`,
            transition: "none",
        },
        {
            transform: `translateY(0%)`,
            transition: ".07s linear",
        },
        {
            transform: `translateY(100%)`,
            transition: ".07s linear",
        },
        {
            transform: `translateY(200%)`,
            transition: ".07s linear",
        },
        {
            transform: `translateY(300%)`,
            transition: ".07s linear",
        },
    ][(state.index + cellIndex) % symbols.length];

    const renderedItems = useMemo(
        () =>
            symbols.map((symbol, idx) => (
                <div
                    key={symbol.key}
                    className={styles.Slot_position}
                    style={createPosition(idx)}
                >
                    {symbol.element}
                </div>
            )),
        [state.index, symbols]
    );

    return (
        <div className={styles.Slot}>
            <div
                className={classes(styles.Slot_inner, {
                    [styles.Slot_inner_blur]: state.active,
                    [styles.Slot_inner_end]: state.end,
                })}
            >
                {renderedItems}
            </div>
        </div>
    );
};

export default Slot;

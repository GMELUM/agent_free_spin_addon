import React, { CSSProperties, ReactElement, useEffect, useMemo, useState } from "react";
import styles from "./slot.module.css";
import { classes } from "../../utils";

export type Symbols = Array<{
    key: string;
    element: ReactElement;
}>;

interface SlotProps {
    hash: number;
    symbols: Symbols;
    change: string;
    onChange: (key: string) => void;
    canStop?: boolean;
}

const Slot: React.FC<SlotProps> = ({
    hash,
    symbols,
    change,
    onChange,
    canStop = true,
}) => {

    const initialIndex = useMemo(() => {
        const index = symbols.findIndex((symbol) => symbol.key === change);
        return index !== -1 ? index : 0;
    }, [symbols, change]);

    const [state, setState] = useState({
        hash: 0,
        index: 0,
        position: symbols.map((_, i) => (i + initialIndex) % symbols.length),
        active: false,
        end: false,
        changedKey: null as string | null,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setState((prevState) => {
                if (!state.active) return prevState;

                const lastElement = prevState.position.pop();
                if (lastElement !== undefined) {
                    prevState.position.unshift(lastElement);
                }

                const currentItem = prevState.position[3];
                const nextIndex = prevState.index++;

                if (symbols[currentItem].key == change && canStop) {
                    return {
                        ...prevState,
                        index: nextIndex,
                        active: false,
                        changedKey: symbols[currentItem].key,
                    };
                }

                return {
                    ...prevState,
                    index: prevState.index++,
                    end: false
                };

            });
        }, 69);

        return () => clearInterval(interval);
    }, [state, change]);

    useEffect(() => {
        if (state.changedKey) {
            onChange(state.changedKey);
            setState((prevState) => ({ ...prevState, changedKey: null, end: true }));
        }
    }, [state.changedKey]);

    useEffect(() => {
        setState((prevState) => ({ ...prevState, active: true, changedKey: null }));
    }, [change, hash]);

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
    ][state.position.indexOf(cellIndex)] || {
        transform: `translateY(-100%)`,
        transition: "none",
    };

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

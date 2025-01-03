import React, { CSSProperties, ReactElement, useEffect, useMemo, useState } from "react";
import styles from "./slot.module.css";

type Symbols = Array<{
    symbol: string;
    element: ReactElement;
}>;

interface SlotProps {
    symbols: Symbols;
}

const Slot: React.FC<SlotProps> = ({ symbols }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const next = () => {
        setIndex((prevIndex) => prevIndex + 1);
    };

    const createPosition = (cellIndex: number): CSSProperties => [
        {
            transform: `translateY(-100%)`,
            transition: "none",
        },
        {
            transform: `translateY(0%)`,
            transition: ".5s linear",
        },
        {
            transform: `translateY(100%)`,
            transition: ".5s linear",
        },
        {
            transform: `translateY(200%)`,
            transition: ".5s linear",
        },
        {
            transform: `translateY(300%)`,
            transition: ".5s linear",
        },
    ][(index + cellIndex) % 5];

    const createItem = (cellIndex: number) => {
        return symbols[cellIndex].element
    }

    const item0 = useMemo(() => createItem(0), [index, symbols]);
    const item1 = useMemo(() => createItem(1), [index, symbols]);
    const item2 = useMemo(() => createItem(2), [index, symbols]);
    const item3 = useMemo(() => createItem(3), [index, symbols]);
    const item4 = useMemo(() => createItem(4), [index, symbols]);

    return (
        <div className={styles.Slot}>
            <div className={styles.Slot_inner}>
                <div className={styles.Slot_position} style={createPosition(0)}>{item0}</div>
                <div className={styles.Slot_position} style={createPosition(1)}>{item1}</div>
                <div className={styles.Slot_position} style={createPosition(2)}>{item2}</div>
                <div className={styles.Slot_position} style={createPosition(3)}>{item3}</div>
                <div className={styles.Slot_position} style={createPosition(4)}>{item4}</div>
            </div>
        </div>
    );
};

export default Slot;

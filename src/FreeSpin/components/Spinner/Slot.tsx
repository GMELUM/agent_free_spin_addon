import React, { CSSProperties, ReactElement, useEffect, useMemo, useState } from "react";
import styles from "./slot.module.css";

type Symbols = Array<{
    symbol: string;
    element: ReactElement;
}>

interface SlotProps {
    symbols: Symbols;
}

const Slot: React.FC<SlotProps> = ({
    symbols
}) => {

    const [position, setPosition] = useState([0, 1, 2, 3, 4]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((p) => [p[4], p[0], p[1], p[2], p[3]]);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const createPosition = (index: number): CSSProperties => [
        {
            transform: `translateY(-100%)`,
            transition: "none",
            zIndex: 0
        },
        {
            transform: `translateY(0%)`,
            transition: ".1s linear",
            zIndex: 1
        },
        {
            transform: `translateY(100%)`,
            transition: ".1s linear",
            zIndex: 1
        },
        {
            transform: `translateY(200%)`,
            transition: ".1s linear",
            zIndex: 1
        },
        {
            transform: `translateY(300%)`,
            transition: ".1s linear",
            zIndex: 0
        }
    ][position.indexOf(index)];

    const createItem = (index: number): ReactElement => {
        return symbols[index].element
    };

    const item0 = useMemo(() => createItem(0), [position]);
    const item1 = useMemo(() => createItem(1), [position]);
    const item2 = useMemo(() => createItem(2), [position]);
    const item3 = useMemo(() => createItem(3), [position]);
    const item4 = useMemo(() => createItem(4), [position]);

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

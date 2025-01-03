import { FC, HTMLAttributes, memo, useEffect, useState } from 'react';
import { classes } from "utils";

import style from "./Spinner.module.css";
import AspectRation from '../AspectRation/AspectRation';
import Slot from './Slot';

interface Spinner extends HTMLAttributes<HTMLDivElement> {

};

const items = [
    {
        symbol: "apple",
        element: (<img src="apple.svg" alt="Apple" />)
    },
    {
        symbol: "banana",
        element: <img src="banana.svg" alt="Banana" />
    },
    {
        symbol: "blackberry",
        element: <img src="blackberry.svg" alt="Blackberry" />
    },
    {
        symbol: "cherry",
        element: <img src="cherry.svg" alt="Cherry" />
    },
    {
        symbol: "currant",
        element: <img src="currant.svg" alt="Currant" />
    },
    {
        symbol: "gooseberry",
        element: <img src="gooseberry.svg" alt="Gooseberry" />
    },
]

const Spinner: FC<Spinner> = ({
    ...prevProps
}) => {

    const [index, setIndex] = useState(0)

    useEffect(() => {

        setTimeout(() => {
            setIndex((i) => i + 1)
        }, 2000)

    })

    return (
        <div {...prevProps} className={classes(style.Spinner, {})}>
            <div className={style.Spinner_outer}>
                <AspectRation width={10} height={11}>
                    <div className={style.Spinner_prize}>
                        <div className={style.Spinner_prize_container}>
                            <div className={style.Spinner_prize_cell}>

                            </div>
                        </div>
                    </div>
                    <div className={style.Spinner_inner}>

                        <div className={style.Spinner_cell}>
                            <Slot symbols={items} />
                        </div>

                        <div className={style.Spinner_cell}>
                            <Slot symbols={items} />
                        </div>

                        <div className={style.Spinner_cell}>
                            <Slot symbols={items} />
                        </div>

                        <div className={style.Spinner_bg} />

                        <div className={style.Spinner_rate}>
                            <div className={style.Spinner_rate_outer}>
                                <div className={style.Spinner_rate_inner}>
                                    SPIN X1000
                                </div>
                            </div>
                        </div>

                    </div>

                </AspectRation>
            </div>
        </div>
    )
}

export default memo(Spinner);

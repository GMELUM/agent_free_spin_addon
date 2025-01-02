import { FC, HTMLAttributes, memo } from 'react';
import { classes } from "utils";

import style from "./Spinner.module.css";
import AspectRation from '../AspectRation/AspectRation';

interface Spinner extends HTMLAttributes<HTMLDivElement> {

};

const Spinner: FC<Spinner> = ({
    ...prevProps
}) => (
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

                    </div>

                    <div className={style.Spinner_cell}>

                    </div>
                    
                    <div className={style.Spinner_cell}>

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

export default memo(Spinner);

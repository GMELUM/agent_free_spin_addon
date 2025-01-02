import { FC, HTMLAttributes, ReactNode, useLayoutEffect, useRef, useState } from "react";

import useEventListener from "../../utils/useEventListener";

import style from "./AspectRation.module.css";

interface IAspectRation extends HTMLAttributes<HTMLDivElement> {
    width: number;
    height: number;

    before?: ReactNode;
    after?: ReactNode;
};

const AspectRation: FC<IAspectRation> = ({
    width,
    height,

    before,
    after,

    children,
    ...others
}) => {

    const container = useRef<HTMLDivElement>(null);

    const [[w, h], setSize] = useState([0, 0]);

    const handlerResize = () => {
        const element = container.current;
        if (element) {

            const containerWidth = element.clientWidth;
            const containerHeight = element.clientHeight;

            const newHeight = containerWidth * height / width;

            if (newHeight > containerHeight) {
                const newWidth = containerHeight * width / height;
                setSize([newWidth, containerHeight]);
                return;
            }

            setSize([containerWidth, newHeight]);
            return;

        }
    };

    useEventListener("resize", handlerResize, window, { passive: true });
    useLayoutEffect(handlerResize, [width, height]);

    return (
        <div ref={container} className={style.AspectRation} {...others}>
            <div style={{ width: w, height: h }}>
                {children}
            </div>
        </div>
    )
}

export default AspectRation;
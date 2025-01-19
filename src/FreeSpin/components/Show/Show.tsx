import { useState, useImperativeHandle, forwardRef, ReactNode, memo, useMemo } from 'react';

// Типизация для props, чтобы включить children
interface ShowProps {
    children: ReactNode;
}

type OutRef = {
    show: () => void;
    hidden: () => void;
}

const Show = forwardRef<OutRef, ShowProps>((props: ShowProps, ref) => {
    const [shouldRender, setShouldRender] = useState(false);

    // Функция для отрисовки контента и перерисовки
    const show = () => {
        setShouldRender(true); // Сначала скрыть контент
    };

    const hidden = () => {
        setShouldRender(false); // Сначала скрыть контент
    };

    // Используем useImperativeHandle для того, чтобы передать функцию show через ref
    useImperativeHandle(ref, () => ({
        show, hidden
    }));

    const child = useMemo(() => props.children, [props])

    return shouldRender && child;

});

export default memo(Show);

import {
  FC,
  HTMLAttributes,
  Children,
  useState,
  useEffect,
  useMemo,
  startTransition,
  ReactNode
} from "react";
import { classes } from "utils";

import style from "./View.module.css";

interface View extends HTMLAttributes<HTMLDivElement> {
  activePanel: string;
  delay?: number;
  safe?: boolean;
  nav?: string;
  background?: ReactNode;
};

const View: FC<View> = ({
  background,
  activePanel,
  delay = 600,
  safe = true,
  nav = "all",
  className,
  children
}) => {

  const [[back, active, animation, show], setNav] = useState(["", activePanel, false, true]);

  const views = useMemo(() => Children.toArray(children) as React.ReactElement[], [children]);
  const viewsNav = useMemo(() => views.map((i) => i.props.nav), [children]);

  const pageBack = views.find((elem) => elem.props.nav === back);
  const pageActive = views.find((elem) => elem.props.nav === active);

  const indexBack = viewsNav.indexOf(back);
  const indexActive = viewsNav.indexOf(activePanel);

  const isBack = indexActive < indexBack;
  const isNext = indexActive > indexBack;

  useEffect(() => {
    if (active !== activePanel) {
      startTransition(() => setNav([active, activePanel, true, true]))
      const timer = window.setTimeout(() => {
        startTransition(() => setNav([active, activePanel, true, false]))
      }, delay);
      return () => window.clearTimeout(timer);
    }
  }, [activePanel]);

  return (
    <div className={classes(style.View, {
      [`${className}`]: !!className,
      [style.View__safe]: safe,
      [style.View__down]: isBack && animation && show,
      [style.View__next]: isNext && animation && show,
      [style.View__visible]: !animation || !show
    })}>
      {background && <div className={style.View__background}>
        {background}
      </div>}
      {pageActive && <div className={style.View__active} key={active}>{pageActive}</div>}
      {show && back && pageBack && <div className={style.View__back} key={back}>{pageBack}</div>}
    </div>
  )
}

export default View;

import {
  FC,
  Children,
  useEffect,
  useState,
  HTMLAttributes,
  ReactNode
} from "react";

import { classes } from "utils";

import style from "./Root.module.css";

interface Root extends HTMLAttributes<HTMLDivElement> {
  popout?: ReactNode;
  modal?: ReactNode;
  notify?: ReactNode;
  activeView: string;
  delay?: number;
  nav?: string;
}

const Root: FC<Root> = ({
  activeView,
  delay = 350,
  popout,
  notify,
  modal,
  children
}) => {
  const [[back, active, animation, show], setNav] = useState(["", activeView, false, true]);

  const views = Children.toArray(children) as React.ReactElement[];
  const pageBack = views.find((elem) => elem.props.nav === back);
  const pageActive = views.find((elem) => elem.props.nav === active);

  useEffect(() => {
    if (active !== activeView) {
      setNav([active, activeView, true, true]);
      const timer = window.setTimeout(() => {
        setNav([active, activeView, true, false]);
      }, delay);
      return () => { window.clearTimeout(timer) };
    }
  }, [activeView]);

  return (
    <div className={style.Root}>
      <div key={back} className={style.Root__back}>{show && back && pageBack}</div>
      <div key={active} className={classes(style.Root__active, {
        [style["Root__active--animate"]]: animation && show,
        [style["Root__active--visible"]]: !animation || !show
      })}>{pageActive}</div>
      {notify}
      {popout}
      {modal}
    </div>
  )
}

export default Root;

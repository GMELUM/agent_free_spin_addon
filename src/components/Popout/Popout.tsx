import { Children, FC, HTMLAttributes, MouseEventHandler, useEffect, useMemo, useState } from "react";

import style from "./Popout.module.css";
import { classes } from "utils";

interface IPopout extends HTMLAttributes<HTMLDivElement> {
  activePopout: string;
  onClose: () => void;
};

const Popout: FC<IPopout> = ({
  activePopout,
  onClose,
  children
}) => {

  const popouts = useMemo(() => Children.toArray(children), [children]) as React.ReactElement[];

  const [[active, show, clear], setState] = useState<[string | undefined, boolean, boolean]>([undefined, false, true]);
  const element = popouts.find((elem) => elem.props.nav === active);

  const handlerClose: MouseEventHandler = (event) => {
    onClose && onClose();
  };

  useEffect(() => {

    if (show && !activePopout) {
      setState([active, false, false]);
      const timer = setTimeout(() => { setState([activePopout, false, true]) }, 500);
      return () => clearTimeout(timer);
    }

    if (!show && !!activePopout) {
      setState([activePopout, false, false]);
      const timer = setTimeout(() => { setState([activePopout, true, false]) }, 50);
      return () => clearTimeout(timer);
    }

    if (show && !!activePopout) {
      setState([activePopout, true, false]);
      return;
    }

  }, [activePopout]);

  if (clear) { return null; };

  return (
    <div className={classes(style.Popout, {
      [style["Popout--show"]]: show,
      [style["Popout--hide"]]: !show
    })}>
      <div className={style.Popout__inner} onClick={handlerClose}>
        <div className={style.Popout__content}>
          {element}
        </div>
      </div>
    </div>
  )
}

export default Popout;

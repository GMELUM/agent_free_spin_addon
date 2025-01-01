import { classes } from 'engine';
import { FC, HTMLAttributes, ReactNode } from 'react';

import style from "./PanelHeader.module.css";

interface IPanelHeader extends HTMLAttributes<HTMLDivElement> {
  string?: ReactNode;
  substring?: ReactNode;
  before?: ReactNode;
  vkma?: boolean;
  border?: boolean;
  padding?: boolean;
  plug?: boolean;
};

const PanelHeader: FC<IPanelHeader> = ({
  string,
  substring,
  before,

  vkma = true,
  border = true,
  padding = false,
  plug = false,

  className,
  children,
  ...prevProps
}) => (
  <div {...prevProps} className={classes(`${style.PanelHeader} ${className}`, {
    [style["PanelHeader--plug"]]: plug,
    [style["PanelHeader--safe"]]: vkma,
    [style["PanelHeader--only_title"]]: !substring,
    [style["PanelHeader--default"]]: !!substring && !!string,
    [style["PanelHeader--border"]]: border,
    [style["PanelHeader--padding"]]: padding
  })}>
    <div className={style.PanelHeader__before}>
      {(string || substring) && (
        <>
          <div className={style.PanelHeader__title}>{string}</div>
          <div className={style.PanelHeader__description}>{substring}</div>
        </>
      )}
      {before && before}
    </div>
    <div className={style.PanelHeader__content}>{children}</div>
    <div className={style.PanelHeader__after}></div>
  </div>
);

export default PanelHeader;

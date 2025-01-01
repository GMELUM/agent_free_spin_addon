import { FC, HTMLAttributes } from "react";
import { Spinner } from "components";

import style from "./Loading.module.css";

interface ILoading extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Loading: FC<ILoading> = () => {
  return (
    <div className={style.Loading}>
      <div className={style.Loading__inner}>
        <Spinner size="medium" />
      </div>
    </div>
  )
}

export default Loading;

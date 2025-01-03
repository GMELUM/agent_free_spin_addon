import { FC, HTMLAttributes } from "react";
import { Spinner, Balances, Spins, ButtonSpin } from "./components";

import "./index.css";

interface FreeSpin extends HTMLAttributes<HTMLDivElement> {}

const FreeSpin: FC<FreeSpin> = ({}) => {
  return (
    <>
      <Balances ap={112000} not={8400000000} ton={245000000000} />

      <Spinner></Spinner>

      <Spins count={15} onClick={() => {}} />
      <ButtonSpin />
    </>
  );
};

export default FreeSpin;

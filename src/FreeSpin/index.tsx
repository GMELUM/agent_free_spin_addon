import { FC, HTMLAttributes, useMemo } from "react";
import { Spinner, Balances, Spins, ButtonSpin } from "./components";
import { Symbols } from "./components/Spinner/Slot";

import "./index.css";

interface FreeSpin extends HTMLAttributes<HTMLDivElement> {
  ap?: number;
  not?: number;
  ton?: number;

  symbols: Symbols;
  combination: [string, string, string];
  prize?: string;

  onSpin: () => void
  onShop: () => void

}

const FreeSpin: FC<FreeSpin> = ({
  ap,
  not,
  ton,
  symbols,
  combination,
  prize,
  onSpin,
  onShop
}) => {

  const balance = useMemo(() => (
    <Balances
      ap={ap}
      not={not}
      ton={ton}
    />
  ), [ap, not, ton])

  return (
    <>

      {balance}

      <Spinner
        symbols={symbols}
        combination={combination}
        prize={prize}
      />

      <Spins count={15} onClick={() => onShop && onShop()} />
      <ButtonSpin onClick={() => onSpin && onSpin()} />

    </>
  );
};

export default FreeSpin;

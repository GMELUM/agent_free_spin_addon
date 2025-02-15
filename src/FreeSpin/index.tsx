import { FC, HTMLAttributes, useEffect, useMemo, useRef } from "react";
import { Spinner, Balances, Spins, ButtonSpin } from "./components";
import { Symbols } from "./components/Spinner/Slot";

import "./index.css";
import CoinsBurstEffect from "./components/CoinsBurstEffect/CoinsBurstEffect";
import Show from "./components/Show/Show";

interface FreeSpin extends HTMLAttributes<HTMLDivElement> {
  ap?: number;
  not?: number;
  ton?: number;
  jackpot?: number;

  symbols: Symbols;
  combination: [string, string, string];
  prize?: string;

  count: number;

  onSpin: () => void;
  onShop: () => void;
  onExecute: () => void;
  rate: React.ReactNode;
  onRate: () => void;
}

const FreeSpin: FC<FreeSpin> = ({
  ap,
  not,
  ton,
  jackpot,
  symbols,
  combination,
  prize,
  count,
  rate,
  onSpin,
  onShop,
  onExecute,
  onRate,
}) => {
  const active = useRef(false);
  const block = useRef(false);

  const balance = useMemo(
    () => <Balances ap={ap} not={not} ton={ton} />,
    [ap, not, ton],
  );

  const showRef = useRef<any>(null);

  const handlerShow = () => {
    if (showRef.current) {
      showRef.current.show();
    }
  };

  const handlerHidden = () => {
    if (showRef.current) {
      showRef.current.hidden();
    }
  };

  const handlerRoll = () => {
    if (!active.current) return;
    if (block.current) return;
    block.current = true;
    onSpin && onSpin();
  };

  useEffect(() => {
    handlerHidden();
  }, [combination]);

  return (
    <>
      <Show ref={showRef}>
        <CoinsBurstEffect
          images={[
            <img src="box_ap.png" alt="box_ap" />,
            <img src="coin_ton.png" alt="coin_ton" />,
            <img src="coin_not.png" alt="coin_not" />,
          ]}
          particleCount={100}
          initialSize={15}
          maxSize={200}
          growthRate={2}
          gravity={0.7}
          burstPower={20}
        />
      </Show>

      {balance}

      <Spinner
        symbols={symbols}
        combination={combination}
        prize={prize}
        rate={rate}
        onRate={onRate}
        onExecute={() => {
          handlerShow();
          onExecute();

          block.current = false;
          window.setTimeout(handlerRoll, 1400); //Задержка перед следующей прокруткой
        }}
      />

      <Spins
        count={count}
        onClick={() => onShop && onShop()}
        jackpot={jackpot}
      />
      <ButtonSpin
        onStatus={(status) => {
          active.current = status;
          handlerRoll();
        }}
      />
    </>
  );
};

export default FreeSpin;

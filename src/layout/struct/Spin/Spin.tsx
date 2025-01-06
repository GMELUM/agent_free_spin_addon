import { FC, HTMLAttributes, useEffect, useState } from "react";
import { useRouter } from "elum-router/react";

import { Panel, View } from "components";
import FreeSpin from "FreeSpin";
import FreeSpinShop from "FreeSpinShop";
import { Symbols } from "FreeSpin/components/Spinner/Slot";

const symbols: Symbols = [
  {
    key: "coin_not",
    element: <img src="coin_not.png" alt="coin_not" />,
  },
  {
    key: "coin_ton",
    element: <img src="coin_ton.png" alt="coin_ton" />,
  },
  {
    key: "coin_ap",
    element: <img src="coin_ap.png" alt="coin_ap" />,
  },
  {
    key: "bag_not",
    element: <img src="bag_not.png" alt="bag_not" />,
  },
  {
    key: "bag_ton",
    element: <img src="bag_ton.png" alt="bag_ton" />,
  },
  {
    key: "bag_ap",
    element: <img src="bag_ap.png" alt="bag_ap" />,
  },
  {
    key: "box_not",
    element: <img src="box_not.png" alt="box_not" />,
  },
  {
    key: "box_ton",
    element: <img src="box_ton.png" alt="box_ton" />,
  },
  {
    key: "box_ap",
    element: <img src="box_ap.png" alt="box_ap" />,
  },
  {
    key: "jeckpot",
    element: <img src="jeckpot.png" alt="jeckpot" />,
  },
  {
    key: "wild",
    element: <img src="wild.png" alt="wild" />,
  },
  {
    key: "free_spin",
    element: <img src="free_spin.png" alt="free_spin" />,
  },
];

interface Spin extends HTMLAttributes<HTMLDivElement> {
  nav: string;
}

const Spin: FC<Spin> = ({ nav }) => {
  const activePanel = useRouter("panel");

  const [value, setValue] = useState<[string, string, string]>([
    "empty",
    "empty",
    "empty",
  ]);
  const [count, setCount] = useState(0);

  const handlerSpin = () => {
    const keys = symbols.map((symbol) => symbol.key);
    const shuffled = keys.sort(() => Math.random() - 0.5);
    console.log(shuffled.slice(0, 3));
    setValue(shuffled.slice(0, 3) as [string, string, string]);
    setCount(0);
  };

  return (
    <View nav={nav} activePanel={activePanel}>
      <Panel nav={"default"} safeTop={false} safeBottom={false} fixed>
        <FreeSpin
          ap={112000}
          // not={0}
          // ton={0}

          symbols={symbols}
          combination={value}
          prize={count > 0 ? `${count} AP` : "-"}
          onShop={() => {
            console.log("open shop panel");
          }}
          onSpin={handlerSpin}
          onExecute={() => {
            setCount(Math.floor(Math.random() * 1e5));
          }}
        />
      </Panel>
    </View>
  );
};

export default Spin;

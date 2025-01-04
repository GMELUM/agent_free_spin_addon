import { FC, HTMLAttributes, useEffect, useState } from "react";
import { useRouter } from "elum-router/react";

import { Panel, View } from "components";
import FreeSpin from "FreeSpin";
import FreeSpinShop from "FreeSpinShop";
import { Symbols } from "FreeSpin/components/Spinner/Slot";

const symbols: Symbols = [
  {
    key: "apple",
    element: (<img src="apple.svg" alt="Apple" />)
  },
  {
    key: "banana",
    element: <img src="banana.svg" alt="Banana" />
  },
  {
    key: "blackberry",
    element: <img src="blackberry.svg" alt="Blackberry" />
  },
  {
    key: "cherry",
    element: <img src="cherry.svg" alt="Cherry" />
  },
  {
    key: "currant",
    element: <img src="currant.svg" alt="Currant" />
  },
  // {
  //   key: "gooseberry",
  //   element: <img src="gooseberry.svg" alt="Gooseberry" />
  // }
]

interface Spin extends HTMLAttributes<HTMLDivElement> {
  nav: string;
}

const Spin: FC<Spin> = ({ nav }) => {

  const activePanel = useRouter("panel");

  const [value, setValue] = useState<[string, string, string]>(["currant", "blackberry", "apple"]);

  const handlerSpin = () => {
    const keys = symbols.map((symbol) => symbol.key);
    const shuffled = keys.sort(() => Math.random() - 0.5);
    console.log(shuffled.slice(0, 3))
    setValue(shuffled.slice(0, 3) as [string, string, string]);
  }

  return (
    <View nav={nav} activePanel={activePanel}>
      <Panel nav={"default"} safeTop={false} safeBottom={false} fixed>
        <FreeSpin

          ap={112000}
          not={8400000000}
          ton={245000000000}

          symbols={symbols}
          combination={value}

          onShop={() => { console.log("open shop panel") }}
          onSpin={handlerSpin}

        />
        {/* <FreeSpinShop /> */}
      </Panel>
    </View>
  );
};

export default Spin;

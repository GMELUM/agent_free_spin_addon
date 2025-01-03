import { FC, HTMLAttributes } from "react";
import { Header, List } from "./components";

import "./index.css";

interface FreeSpinShop extends HTMLAttributes<HTMLDivElement> {}

const FreeSpinShop: FC<FreeSpinShop> = ({}) => {
  const handlerPay = (count: number) => {
    console.log({ count });
  };

  return (
    <>
      <Header />
      <List
        onPay={handlerPay}
        prices={[
          {
            spins: 100,
            price: 150,
          },
          {
            spins: 500,
            price: 300,
            active: true,
          },
          {
            spins: 1000,
            price: 600,
          },
          {
            spins: 10000,
            price: 5000,
          },
        ]}
      />
    </>
  );
};

export default FreeSpinShop;

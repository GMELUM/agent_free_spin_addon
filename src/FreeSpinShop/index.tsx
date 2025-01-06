import { FC, HTMLAttributes } from "react";
import { Header, List } from "./components";

import "./index.css";

interface FreeSpinShop extends HTMLAttributes<HTMLDivElement> {
  onPay: (count: number) => void;
  prices: { spins: number; price: number; active?: boolean }[];
}

const FreeSpinShop: FC<FreeSpinShop> = ({ onPay, prices }) => {
  return (
    <>
      <Header />
      <List onPay={onPay} prices={prices} />
    </>
  );
};

export default FreeSpinShop;

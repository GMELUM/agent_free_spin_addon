import { FC, HTMLAttributes } from "react";

import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import { IconStar } from "FreeSpinShop/source";
import formatNumberWithCommas from "FreeSpin/utils/formatNumberWithCommas";

interface Description extends HTMLAttributes<HTMLDivElement> {
  opacity?: number;
}
const Description: FC<Description> = ({ children, opacity = 0.6 }) => {
  return (
    <>
      <span>For {children} Telegram Stars</span>
      <span>
        <IconStar style={{ opacity }} />
      </span>
    </>
  );
};

interface List extends HTMLAttributes<HTMLDivElement> {
  onPay: (count: number) => void;
  prices: { spins: number; price: number; active?: boolean }[];
}

const List: FC<List> = ({ onPay, prices }) => {
  return (
    <ButtonGroup>
      {prices.map((item, index) => (
        <ButtonGroup.Container key={index}>
          <Button
            onClick={() => onPay(item.spins)}
            appearance={item.active ? "gold" : "secondary"}
            description={
              <Description children={formatNumberWithCommas(item.spins)} />
            }
          >
            {formatNumberWithCommas(item.spins)} spins
          </Button>
        </ButtonGroup.Container>
      ))}
    </ButtonGroup>
  );
};

export default List;

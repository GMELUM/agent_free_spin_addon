import { FC, HTMLAttributes, memo } from "react";

import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import { IconAgent, IconNOT, IconTON } from "FreeSpin/source";
import formatCrypto from "FreeSpin/utils/formatCrypto";
import formatNumberWithCommas from "FreeSpin/utils/formatNumberWithCommas";

interface Balances extends HTMLAttributes<HTMLDivElement> {
  ap: number | false;
  ton: number | false;
  not: number | false;
}

const Balances: FC<Balances> = ({ ap, ton, not, ...prevProps }) => (
  <ButtonGroup {...prevProps}>
    {ap !== false && (
      <ButtonGroup.Container>
        <Button
          stretched
          textSize={"large"}
          before={<IconAgent width={30} height={30} />}
        >
          {formatNumberWithCommas(ap)} AP
        </Button>
      </ButtonGroup.Container>
    )}
    {(ton !== false || not !== false) && (
      <ButtonGroup.Container>
        {ton !== false && (
          <Button stretched before={<IconTON width={30} height={30} />}>
            {formatCrypto(ton)} TON
          </Button>
        )}
        {not !== false && (
          <Button stretched before={<IconNOT width={30} height={30} />}>
            {formatCrypto(not)} NOT
          </Button>
        )}
      </ButtonGroup.Container>
    )}
  </ButtonGroup>
);

export default memo(Balances);
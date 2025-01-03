import { FC, HTMLAttributes } from "react";
import Plug from "../Plug/Plug";

import { IconSpin } from "FreeSpin/source";

interface Header extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<Header> = ({}) => {
  return (
    <Plug icon={<IconSpin width={73} height={73} />} header={"Spins"}>
      You can purchase spins for agent slots here
    </Plug>
  );
};

export default Header;

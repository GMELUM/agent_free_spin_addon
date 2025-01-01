
import { FC, HTMLAttributes, memo } from 'react';

import { Popout } from "components";
import { backPage, useRouter } from 'elum-router/react';
import Loading from './Loading/Loading';

interface Popouts extends HTMLAttributes<HTMLDivElement> { };

const Popouts: FC<Popouts> = ({ }) => {

  const activePopout = useRouter("popout");

  const handlerClose = () => backPage({
    toStay: "game",
    ignoreFreeze: false
  })

  return (
    <Popout
      activePopout={activePopout}
      onClose={handlerClose}
    >

      <Loading nav={"loading"} />

    </Popout>
  )
}

export default memo(Popouts);

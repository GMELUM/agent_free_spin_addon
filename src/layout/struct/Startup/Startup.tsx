import { FC, HTMLAttributes, useEffect } from "react";
import { nextPage, useRouter } from "elum-router/react";

import { View } from "components";
import Default from "./Default/Default";

interface Startup extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Startup: FC<Startup> = ({
  nav
}) => {

  const activePanel = useRouter("panel");

  const preload = async () => {

    setTimeout(() => {
      nextPage({ view: "game", stay: "game", freeze: true })
    }, 1000)

  }

  useEffect(() => { preload() }, []);

  return (
    <View nav={nav} activePanel={activePanel}>
      <Default nav={"default"} />
    </View>
  )

}

export default Startup;

import { FC, HTMLAttributes } from "react";
import { useRouter } from "elum-router/react";

import { Panel, View } from "components";
import FreeSpin from "FreeSpin";

interface Spin extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Spin: FC<Spin> = ({
  nav
}) => {

  const activePanel = useRouter("panel");

  return (
    <View nav={nav} activePanel={activePanel}>
      <Panel
        nav={"default"}
        safeTop={false}
        safeBottom={false}
        fixed
      >

        <FreeSpin />

      </Panel>
    </View>
  )

}

export default Spin;

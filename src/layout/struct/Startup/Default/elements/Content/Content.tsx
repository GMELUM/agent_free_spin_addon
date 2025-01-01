import { FC, HTMLAttributes } from "react";

import { Plug, Spinner } from "components";

interface Content extends HTMLAttributes<HTMLDivElement> { };

const Content: FC<Content> = () => (
  <Plug
    mode={"lower"}
    icon={<Spinner size={"medium"} style={{ color: "#aeb7c2" }} />}
  />
)

export default Content;

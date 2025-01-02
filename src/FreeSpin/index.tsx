import { FC, HTMLAttributes } from "react";
import { Spinner } from "./components";

interface FreeSpin extends HTMLAttributes<HTMLDivElement> {

};

const FreeSpin: FC<FreeSpin> = ({ }) => {
    return (
        <>
            <div style={{ width: "100%", height: "150px" }} />

            <Spinner>

            </Spinner>

            <div style={{ width: "100%", height: "150px" }} />
        </>
    )
}


export default FreeSpin;

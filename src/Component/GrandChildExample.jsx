import { useContext } from "react";
import { MyContext } from "./Example";

function GrandChildExample() {

    const value = useContext(MyContext);

    return (
        <>
            <div>
                {value}
            </div>
        </>
    );
}

export default GrandChildExample;
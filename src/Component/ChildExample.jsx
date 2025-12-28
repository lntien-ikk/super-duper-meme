import GrandChildExample from "./GrandChildExample";

function ChildExample({ value }) {

    return (
        <>
            <div>
                {value}
                <GrandChildExample />
            </div>
        </>
    );
}

export default ChildExample;
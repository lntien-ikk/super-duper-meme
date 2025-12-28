import { useReducer } from "react";

export const Caculator = () => 
{
    const initState = {
        a: 5,
        b: 5,
        result: 10
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "bChange":
                return {...state, b: action.value};
            case "aChange":
                return {...state, a: action.value};
            case "add":
                return {...state, result: Number(state.a) + Number(state.b)};
            case "minus":
                return {...state, result: state.a - state.b};
            case "multiply":
                return {...state, result: state.a * state.b};
            case "divide":
                return {...state, result: state.a / state.b};
            default:
                throw new Error("Error");
        }
    }
    const [state, dispatch] = useReducer(reducer, initState);

    const operatorChange = (e) => {
        dispatch({type: e.target.value});
    };

    const aValChange = (e) => {
        dispatch({type: "aChange", value: e.target.value});
    };

    const bValChange = (e) => {
        dispatch({type: "bChange", value: e.target.value});
    };

    return (
        <>
            <label>a</label>
            <input type="number" name="aVal" value={state.a} onChange={aValChange}></input> <br></br>
            <label>b</label>
            <input type="number" name="bVal" value={state.b} onChange={bValChange}></input> <br></br>
            <select onChange={operatorChange}>
                <option value="add">add</option>
                <option value="minus">minus</option>
                <option value="multiply">multiply</option>
                <option value="divide">divide</option>
            </select>
            <p>結果: {state.result}</p>
        </>
    );
}
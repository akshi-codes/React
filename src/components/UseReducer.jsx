import React, {useReducer} from 'react'

const initialValue = {
    count : 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return {...state, count: state.count + 1 }
        case "incrementBy5":
            return {...state, count: state.count + action.payload}
        case "decrement":
            return {...state, count: state.count - 1 }
        case "reset":
            return {...state, count: state.count - state.count}
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <h2>userReducer Demo</h2>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "incrementBy5", payload: 5})}>Increment By 5</button>
            <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    )
}

export default UseReducer
"use client"
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>カウント: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>増加</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>減少</button>
            <button onClick={() => dispatch({ type: 'reset' })}>リセット</button>
        </div>
    );
};

export default Counter;

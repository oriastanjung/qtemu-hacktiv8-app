import React from "react";
const CounterComponent = (props) => {
    return (
        <div>
            <h1>{props.counter}</h1>
            <button onClick={props.handleIncrement}>+</button>
            <button onClick={props.handleDecrement}>-</button>
            <button onClick={props.handleReset}>RESET</button>
            <p>{props.isEven}</p>
        </div>
    );
}

export default CounterComponent
import React, { useEffect, useState } from "react";
import CounterComponent from "./CounterComponent/CounterComponent";
import {useTestHook} from "./CustomHook/TestHook.hook"


function LatihanHooks() {
  const {count,
    isEven,
    handleDecrement,
    handleIncrement,
    handleReset} = useTestHook(); // custom hooks


  return (
    <div style={{ color: "white", margin: "0 25%" }}>
      LATIHAN
      <CounterComponent
        counter={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleReset={handleReset}
        isEven={isEven}
      />
    </div>
  );
}

export default LatihanHooks;

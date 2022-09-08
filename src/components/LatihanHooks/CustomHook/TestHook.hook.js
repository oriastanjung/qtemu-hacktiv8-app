import React, { useEffect, useState } from "react";


export const useTestHook = () => {
    const [count, setCount] = useState(0); // HOOKS USESTATE unutk menyimpan data2 dalam kondisi sekarang
    const [time, setTime] = useState(0);
  
  
    const isEven = (() => {
      if (count % 2 === 0) {
        return "Genap";
      } else {
        return "Ganjil";
      }
    })(); //IIFE immediately invoked functional expression
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
    const handleDecrement = () => {
      setCount(count - 1);
    };
    const handleReset = () => {
      setCount(0);
    };
  
  
    useEffect(() => {
      console.log('count berubah')
    }, [count])
    
    return {
        count,
        isEven,
        handleDecrement,
        handleIncrement,
        handleReset,
    }
}
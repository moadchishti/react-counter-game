import { useState, useEffect } from "react";
import Buttons from "../Buttons/Buttons";
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [seconds, setSeconds] = useState(10);
    const [isActive, setIsActive] = useState(false);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const resetCounter = () => {
        setCounter(0);
        setIsActive(false);
        setSeconds(10);
    };


    useEffect(() => {
        let interval = null;
    
        if (isActive && seconds > 0) {
          interval = setInterval(() => {
            setSeconds((seconds) => seconds - 1);
          }, 1000);
        } else if (seconds === 0) {
          setIsActive(false);
          clearInterval(interval);
        }
    
        return () => clearInterval(interval);
      }, [isActive, seconds]);

      const startTimer = () => setIsActive(true);


    return (
        <div className="shell">
            <h1 className="timer ">Timer: {seconds}</h1>
            <h1 className="count">Count: {counter}</h1>
            <Buttons increment={incrementCounter} reset={resetCounter} start={startTimer} active={isActive} />
        </div>
    );
}

export default Counter;
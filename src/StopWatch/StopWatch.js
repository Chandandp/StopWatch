import { useState, useEffect } from "react";

function StopWatch() {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false); // Corrected typo
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const sec = seconds % 60; // Corrected modulus value to 60
        return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
    };

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        
        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [isRunning]);

    return (
        <div>
            <h1>Stopwatch</h1>
            <h2>Timer: {formatTime(timer)}</h2>
            <button onClick={() => {
                setIsRunning((prev) => !prev);
            }}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={() => {
                setTimer(0);
                setIsRunning(false);
            }}>
                Reset
            </button>
        </div>
    );
}

export default StopWatch;
import { useState, useEffect } from "react";

function StopWatch() {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
    };

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        } else if (!isRunning && timer !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const toggleTimer = () => {
        setIsRunning((prev) => !prev);
    };

    const resetTimer = () => {
        setTimer(0);
        setIsRunning(false);
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <h2>Time: {formatTime(timer)}</h2>
            <button onClick={toggleTimer}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={resetTimer}>
                Reset
            </button>
        </div>
    );
}

export default StopWatch;
import { useEffect, useState } from "react";

export function Clock() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunnig] = useState(false);
  const [laps, setLaps] = useState([]);

  function handleStart() {
    setIsRunnig(true);
  }
  function handleStop() {
    setIsRunnig(false);
  }
  function handleReset() {
    setTimer(0);
    setIsRunnig(false);
    setLaps([]);
  }

  function handleLaps() {
    if (!isRunning) {
      return;
    }
    setLaps([...laps, timer]);
  }

  const formatTimer = (timer, showMS = true) => {

    const hours = Math.floor(timer / 3600000);
    const minutes = Math.floor((timer / 60000) % 60);
    const seconds = Math.floor((timer / 1000) % 60);
    const millieSeconds = timer % 1000;

    const hh = String(hours).padStart(2, "0");
    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    const ms = String(millieSeconds).padStart(3, "0").slice(0, 2);

    if (showMS) {
      return `${hh} : ${mm} : ${ss} : ${ms}`;
    } else {
      return `${hh} : ${mm} : ${ss}`;
    }
  };

  useEffect(() => {
    let intervalID;

    if (!isRunning) {
      return;
    }

    intervalID = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);

    return () => {
      clearInterval(intervalID);
    };
  }, [isRunning]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{formatTimer(timer)}</h1>
        <div style={{ display: "flex", gap: "16px" }}>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <button onClick={handleLaps}>lap</button>
        <ul>
          {laps.map((lapTime, index) => (
            <li key={index}>
              Lap {index + 1}: {formatTimer(lapTime, false)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

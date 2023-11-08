import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);

    const handleClear = () => {
        setTime(0)
        setStart(false)
    }

  useEffect(() => {
    if (!start) return;
    const timerUp = setInterval(() => {
        setTime((prevTime) => (prevTime + 10))
    }, 10);
    return () => {
      clearInterval(timerUp);
    };
  }, [start]);

  return (
    <>
      <div data-testid="stopwatch-wrapper" className="h-screen w-screen bg-black text-white text-9xl grid grid-cols-1 place-items-center">
        <div className="col-start-1 col-end-2">
          <span data-testid="minutes">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
          <span data-testid="seconds">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
          <span data-testid="milliseconds">{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="col-start-1 col-end-2 flex justify-between w-96">
          <button data-testid="clear-btn" className="text-2xl text-black rounded-full bg-white h-28 w-28"
          disabled={time === 0}
          onClick={()=> handleClear()}>Clear</button>
          {!start ? (
            <button data-testid="start-btn" className="text-2xl text-white rounded-full bg-green-900 h-28 w-28" onClick={() => setStart(!start)}>
              Start
            </button>
          ) : (
            <button data-testid="stop-btn" className="text-2xl text-white rounded-full bg-red-900 h-28 w-28" onClick={() => setStart(!start)}>
              Stop
            </button>
          )}
        </div>
      </div>
    </>
  );
}

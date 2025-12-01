import { useState } from "react";
import Controls from "./Controls";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(count + Number(step));
  const decrement = () => setCount(count - Number(step));
  const reset = () => setCount(0);

  return (
    <div>
      <h1>{count}</h1>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
          style={{ width: "80px", padding: "5px" }}
        />
      </div>

      <Controls
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
    </div>
  );
}

export default Counter;

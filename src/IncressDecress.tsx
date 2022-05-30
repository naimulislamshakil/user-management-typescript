import React, { useState } from "react";

const IncressDecress = () => {
  const [counter, setCounter] = useState<number>(0);

  const incress = (): void => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h2>This is Counter</h2>
      <h2>{counter}</h2>
      <div className="d-flex">
        <button onClick={incress}>Insress</button>
        <button onClick={decress}>Decress</button>
      </div>
    </div>
  );
};

export default IncressDecress;

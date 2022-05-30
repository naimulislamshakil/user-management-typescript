import React, { useState } from "react";

const IncressDecress = () => {
  const [counter, setCounter] = useState<number>(0);

  const incress = (): void => {
    setCounter(counter + 1);
  };

  const decress = (): void => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h2>This is Counter</h2>
      <h2>{counter}</h2>
      <div className="d-flex mt-2 justify-content-center ">
        <button className="btn btn-success" onClick={incress}>
          Insress
        </button>
        <button className="btn btn-danger ms-2" onClick={decress}>
          Decress
        </button>
      </div>
    </div>
  );
};

export default IncressDecress;

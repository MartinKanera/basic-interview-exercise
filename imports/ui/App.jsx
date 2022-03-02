import React, { useState } from 'react';
import Controls from "./Controls/Controls.jsx";
import FizzBuzz from "./FizzBuzz/FizzBuzz.jsx";

export const App = () => {
  const [range, setRange] = useState([0, 100]);

  const handleRange = (range) => {
    setRange(range);
  }

  return (
    <>
      <h1>FizzBuzz</h1>
      <Controls handleRange={handleRange} />
      <div className="divider"></div>
      <FizzBuzz range={range} />
    </>
  )
};

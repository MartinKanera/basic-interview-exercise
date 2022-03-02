import React, { useState, useEffect } from 'react';
import InputField from "../InputField/InputField.jsx";
import "./Controls.css"

const controls = ({ handleRange }) => {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(100);

  useEffect(() => handleRange([from, to]), [from, to]);

  return (
    <div className="controls">
      <InputField name="from" placeholder="From" defaultValue={from} onChange={setFrom} />
      <InputField name="to" placeholder="To" defaultValue={100} onChange={setTo} />
      { from > to && (<div className="error">Ending value has to greater than starting value</div>) }
    </div>
  )
}

export default controls;
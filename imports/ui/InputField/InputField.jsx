import React, { useState } from "react";
import "./InputField.css";

const InputField = ({ name, placeholder, onChange, type = "number", defaultValue = 0 }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    const parsedValue = type === "number" && e.target.value !== "" ? Number(e.target.value) : e.target.value;
    onChange(parsedValue);
  }

  return (
    <input
      value={value}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={handleChange}
      className="field"
    />
  );
}

export default InputField;
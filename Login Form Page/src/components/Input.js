import { useState } from "react";
import "./Input.css";

const Input = ({ label, placeholderPlaceholder }) => {
  const [placeholderTextValue, setPlaceholderTextValue] = useState("");
  return (
    <div className="input">
      <div className="label">{label}</div>
      <div className="input1">
        <div className="input2" />
        <input
          className="placeholder"
          placeholder={placeholderPlaceholder}
          type="text"
          value={placeholderTextValue}
          onChange={(event) => setPlaceholderTextValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;

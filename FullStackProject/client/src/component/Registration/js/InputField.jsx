import React from "react";
import style from "../css/inputField.module.css";

const InputField = ({ label, type, name, value, onChange, required }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        placeholder={label}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-control"
      />
    </div>
  );
};

export default InputField;

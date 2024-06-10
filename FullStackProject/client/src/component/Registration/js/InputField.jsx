import React from "react";
import style from "../css/inputField.module.css";

const InputField = ({ label, type, name, value, onChange, required }) => {
  return (
    <div className={style.inputField}>
      <input
        type={type}
        placeholder={label}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        title=""
      />
      <span className={style.tooltip}>{label}</span>
    </div>
  );
};

export default InputField;
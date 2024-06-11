import React, { useState } from "react";
import PasswordField from "./PasswordField";
import style from "../css/RegisterUserForm.module.css";
import { Button } from "./Button";
import { validatePassword } from "../helper/Validation";


export const FormSection3 = ({ formData, showAlert }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e, password) => {
    let isValid = true;
    if (!validatePassword(password)) {
      showAlert(
        "Password must have uppercase, lowercase, special character, and number, with minimum length of 6.",
        "error"
      );

      isValid = false;
      if (!isValid) return;
    }
  };

  return (
    <div className={style.formSection}>
      <p className={style.userIdNote}>
        <span className="colorRed boldL2">Note: </span>Keep your{" "}
        <span className="boldL2">User ID </span>
        in a secure place, as it is required for login and cannot be
        regenerated.{" "}
      </p>
      <p className={style.userId}>
        <span className="colorCyan boldL2">User ID: </span>
        {formData.userId}
      </p>
      <PasswordField
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
      />

      <div className={style.btnRapper}>
        <Button text={"Register"} onClick={(e) => handleSubmit(e, password)} />
      </div>
    </div>
  );
};

import React from "react";
import style from "../css/RegisterUserForm.module.css";
import { Button } from "./Button";

export const FormSection3 = ({ formData, showAlert, setFormFillStep }) => {
  const handleSubmit = (userId) => {
    showAlert(`Login Successfully, ${userId}`, "success");
    setFormFillStep(3);
  };

 
  return (
    <div className={style.formSection}>
      <p className={style.userIdNote}>
        <span className="colorRed boldL2">Note: </span>Keep your{" "}
        <span className="boldL2">User ID & Passcode </span>
        in a secure place, as it is required for login and cannot be
        regenerated.
      </p>
      <p className={style.userId}>
        <span className="colorCyan boldL2">User ID: </span>
        {formData.userId}
      </p>

      <p className={style.userId}>
        <span className="colorCyan boldL2">Passcode: </span>
        {formData.passcode}
      </p>

      <div className={style.btnRapper}>
        <Button text={"Login"} onClick={() => handleSubmit(formData.userId)} />
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
// import PasswordField from "./PasswordField";
import style from "../css/RegisterUserForm.module.css";
import { Button } from "./Button";
import { validatePassword } from "../helper/Validation";
import generatePasscode from "../helper/generatePasscode.js";
import generateUserId from "../helper/generateID.js";

export const FormSection3 = ({ showAlert }) => {
  // const [password, setPassword] = useState("");

  const handleSubmit = (e, password) => {
    let isValid = true;
    if (!validatePassword(password)) {
      showAlert(
        "Password must have uppercase, lowercase, special character, and number, with minimum length of 6.",
        "error"
      );

      isValid = false;
      if (!isValid) return;
    } else {
      showAlert("Login Successfully", "success");
    }
  };

  const [passCode, setPassCode] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    setPassCode(generatePasscode());
    setUserId(generateUserId());
  }, []);

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
        {userId}
      </p>

      <p className={style.userId}>
        <span className="colorCyan boldL2">Passcode: </span>
        {passCode}
      </p>

      <div className={style.btnRapper}>
        <Button text={"Login"} onClick={(e) => handleSubmit(e, passCode)} />
      </div>
    </div>
  );
};

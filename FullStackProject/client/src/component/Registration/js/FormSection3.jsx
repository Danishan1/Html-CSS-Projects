import React, { useEffect, useState } from "react";
// import PasswordField from "./PasswordField";
import style from "../css/RegisterUserForm.module.css";
import { Button } from "./Button";
import generatePasscode from "../helper/generatePasscode.js";
import generateUserId from "../helper/generateID.js";

export const FormSection3 = ({ showAlert }) => {
  // const [password, setPassword] = useState("");

  const handleSubmit = (userID, passCode) => {
    // It happens that  Due to Error or any failure, unable to login right away, then redirect to login page
    showAlert(`Login Successfully, ${userID}`, "success");
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
        <Button text={"Login"} onClick={() => handleSubmit(userId, passCode)} />
      </div>
    </div>
  );
};

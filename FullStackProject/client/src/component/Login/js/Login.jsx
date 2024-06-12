import React, { useState, useRef } from "react";
import AlertContainer from "../../Registration/js/AlertContainer";
import style from "../css/Login.module.css";
import PasswordField from "./PasswordField";
import InputField from "../../Registration/js/InputField";
import { Button } from "../../Registration/js/Button";

const UserForm = ({ setFormVisibility }) => {
  const [alertContainer, setAlertContainer] = useState([]);

  const alertRef = useRef(null);
  const showAlert = (message, type) => {
    if (alertRef.current) {
      alertRef.current.addAlert(message, type);
    }
  };

  const [userID, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setUserId(value);
  };

  const handleLogin = () => {};
  const handleRegister = () => {
    setFormVisibility("register");
  };

  // const [formFillStep, setFormFillStep] = useState(0);
  return (
    <div className={style.formRapper}>
      <div className={style.userForm}>
        <AlertContainer
          ref={alertRef}
          setAlertContainer={setAlertContainer}
          alertContainer={alertContainer}
        />
        <form>
          <div className={style.formSection}>
            <p className="colorCyan boldL2" style={{ textAlign: "center" }}>
              Welcome to Login Page
            </p>
            <InputField
              label="User ID"
              type="text"
              name="userID"
              value={userID}
              onChange={handleChange}
              required={true}
            />
            <PasswordField
              name={"password"}
              value={password}
              placeholder={"Pass Code"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={style.btnRapper}>
              <Button text={"Login"} onClick={(e) => handleLogin(e)} />
              <Button text={"Register"} onClick={() => handleRegister()} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

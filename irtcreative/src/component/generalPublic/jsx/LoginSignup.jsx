import React from "react";
import style from "../css/LoginSignup.module.css";
import CommingSoon from "./CommingSoon";

const LoginSignup = () => {
  return (
    <>
      <div className={style.loginSignup}>
        <CommingSoon
          text={
            "I am currently developing the 'Login/Signup' Layout feature. This update will be released shortly."
          }
        />
      </div>
    </>
  );
};

export default LoginSignup;

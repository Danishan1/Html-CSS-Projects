import React, { useState, useEffect } from "react";
import style from "../css/RegisterUserForm.module.css";
import { Button } from "./Button";
import OtpField from "./OtpField";

export const FormSection2 = ({ formData, showAlert, setFormFillStep }) => {
  const mobileOTP = "123456";
  const mailOTP = "654321";

  const [mobileVerified, setMobileVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileErrorShown, setMobileErrorShown] = useState(false);
  const [emailErrorShown, setEmailErrorShown] = useState(false);
  const [mobileOtp, setMobileOtp] = useState("");
  const [emailOtp, setEmailOtp] = useState("");

  useEffect(() => {
    setMobileErrorShown(false);
  }, [mobileOtp]);

  useEffect(() => {
    setEmailErrorShown(false);
  }, [emailOtp]);

  const move2Section3 = async (e) => {
    e.preventDefault();
    if (mobileVerified && emailVerified) {
      showAlert("OTP Verified!", "success");
      setFormFillStep(2);
    } else {
      if (!mobileVerified && !emailVerified)
        showAlert("Please verify both Mobile and Email OTPs.", "error");
      else if (!mobileVerified)
        showAlert("Please verify Mobile OTPs.", "error");
      else showAlert("Please verify Email OTP.", "error");
    }
  };

  const handleMobileChange = (otp) => {
    setMobileOtp(otp);
    if (mobileOTP === otp) {
      if (!mobileVerified) {
        showAlert("Mobile OTP verified successfully!", "success");
        setMobileVerified(true);
        setMobileErrorShown(false);
      }
    } else if (!mobileErrorShown) {
      showAlert("Wrong Mobile OTP!", "error");
      setMobileVerified(false);
      setMobileErrorShown(true);
    }
  };

  const handleEmailChange = (otp) => {
    setEmailOtp(otp);
    if (mailOTP === otp) {
      if (!emailVerified) {
        showAlert("Email OTP verified successfully!", "success");
        setEmailVerified(true);
        setEmailErrorShown(false);
      }
    } else if (!emailErrorShown) {
      showAlert("Wrong Email OTP!", "error");
      setEmailVerified(false);
      setEmailErrorShown(true);
    }
  };

  return (
    <div className={`${style.formSection} ${style.formSection2}`}>
      <p className="colorCyan boldL2" style={{ textAlign: "center" }}>
        Verify Your Mobile & Email ID
      </p>
      <div>
        {!mobileVerified && (
          <p>
            <span className="colorCyan boldL2">Verify Mobile No : </span>
            {formData.mobile}
          </p>
        )}
        {!mobileVerified ? (
          <OtpField onChange={handleMobileChange} />
        ) : (
          <p className="colorBlue">Mobile OTP Verified.</p>
        )}
      </div>
      <div>
        {!emailVerified && (
          <p>
            <span className="colorCyan boldL2">Verify Email: </span>
            {formData.email}
          </p>
        )}
        {!emailVerified ? (
          <OtpField onChange={handleEmailChange} />
        ) : (
          <p className="colorBlue">Email OTP Verified.</p>
        )}
      </div>
      <div className={style.btnRapper}>
        <Button text={"Generate ID & Passcode"} onClick={move2Section3} />
      </div>
    </div>
  );
};

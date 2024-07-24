import React, { useState, useEffect } from "react";
import style from "../css/RegisterUserForm.module.css";
import { Button } from "./Button";
import OtpField from "./OtpField";
import axios from "axios";

export const FormSection2 = ({
  formData,
  setFormData,
  showAlert,
  setFormFillStep,
}) => {
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

  const verifyOTP = async (otp, type, verifi_ID) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/verifyOTP",
        {
          otp,
          type,
          verifi_ID,
        }
      );

      return response.data.isValid;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const register = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          ...formData,
        }
      );

      if (response.data.code === "SUCC") {
        setFormData((prevFormData) => ({
          ...prevFormData,
          userId: response.data.userId,
          passcode: response.data.password,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const move2Section3 = async (e) => {
    e.preventDefault();
    if (mobileVerified && emailVerified) {
      await register();
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

  const handleMobileChange = async (otp) => {
    setMobileOtp(otp);
    const isVerified = await verifyOTP(mobileOtp, "mobile", formData.email);
    if (isVerified) {
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

  const handleEmailChange = async (otp) => {
    setEmailOtp(otp);
    const isVerified = await verifyOTP(emailOtp, "email", formData.email);
    if (isVerified) {
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

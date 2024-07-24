import React from "react";
import InputField from "./InputField";
import style from "../css/RegisterUserForm.module.css";
import { Button } from "./Button";
import { validateEmail, validateMobile } from "../helper/Validation";
import axios from "axios";

export const FormSection1 = ({
  setFormData,
  formData,
  showAlert,
  setFormFillStep,
  setFormVisiblity,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGetOTP = async (type, purpose, userName, verificationID) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/getOTP",
        {
          type,
          purpose,
          userName,
          verificationID,
        }
      );

      if (response.data.code === "INFO01" || response.data.code === "ERR01") {
        showAlert(response.data.message, "error");
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const move2Section2 = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (!validateEmail(formData.email)) {
      showAlert("Invalid email format.", "error");
      isValid = false;
    }

    if (!validateMobile(formData.mobile)) {
      showAlert("Invalid mobile number. Must be 10 digits.", "error");
      isValid = false;
    }

    // OTP for Email Verification
    isValid = await handleGetOTP(
      "email",
      "verification",
      formData.name,
      formData.email
    );
    if (!isValid) return;

    // OTP For Mobile verification
    isValid = await handleGetOTP(
      "mobile",
      "verification",
      formData.name,
      formData.email
    );

    if (!isValid) return;
    showAlert("Great, Let's verify your details...", "success");
    setFormFillStep(1);
  };

  return (
    <div className={style.formSection}>
      <p className="colorCyan boldL2" style={{ textAlign: "center" }}>
        Welcome to Registration Page
      </p>
      <InputField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required={true}
      />
      <InputField
        label="Mobile"
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        required={true}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required={true}
      />
      <InputField
        label="Designation"
        type="designation"
        name="designation"
        value={formData.designation}
        onChange={handleChange}
      />
      <div className={style.btnRapper}>
        <Button text={"Verify Details"} onClick={move2Section2} />
        <Button text={"Login"} onClick={() => setFormVisiblity("login")} />
      </div>
    </div>
  );
};

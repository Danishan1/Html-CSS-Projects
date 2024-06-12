import React, { useState, useRef } from "react";
import AlertContainer from "./AlertContainer";
import { v4 as uuidv4 } from "uuid";
import style from "../css/RegisterUserForm.module.css";
import { FormSection1 } from "./FormSection1";
import { FormSection2 } from "./FormSection2";
import { FormSection3 } from "./FormSection3";

const UserForm = ({ orgId, createdBy, setFormVisiblity }) => {
  const [formData, setFormData] = useState({
    userId: uuidv4().slice(0, 6).toUpperCase(),
    name: "Danishan",
    mobile: "9540514188",
    email: "danishan089@gmail.com",
    profilePic: "",
    status: "active",
    designation: "User",
    orgId: orgId,
    createdBy: createdBy,
    updatedBy: createdBy,
  });

  const [alertContainer, setAlertContainer] = useState([]);

  const alertRef = useRef(null);
  const showAlert = (message, type) => {
    if (alertRef.current) {
      alertRef.current.addAlert(message, type);
    }
  };

  const [formFillStep, setFormFillStep] = useState(0);

  return (
    <div className={style.formRapper}>
      <div className={style.userForm}>
        <AlertContainer
          ref={alertRef}
          setAlertContainer={setAlertContainer}
          alertContainer={alertContainer}
        />
        <form>
          {formFillStep === 0 ? (
            <FormSection1
              setFormData={setFormData}
              formData={formData}
              showAlert={showAlert}
              setFormFillStep={setFormFillStep}
              setFormVisiblity={setFormVisiblity}
            />
          ) : formFillStep === 1 ? (
            <FormSection2
              formData={formData}
              showAlert={showAlert}
              setFormFillStep={setFormFillStep}
            />
          ) : (
            <FormSection3 showAlert={showAlert} />
          )}
          <div className={style.progress}>
            {formFillStep === 0 ? (
              <samp className={`${style.currentSec}`}></samp>
            ) : (
              <samp className={`${style.circle}`}></samp>
            )}
            {formFillStep === 1 ? (
              <samp className={`${style.currentSec}`}></samp>
            ) : (
              <samp className={`${style.circle}`}></samp>
            )}
            {formFillStep === 2 ? (
              <samp className={`${style.currentSec}`}></samp>
            ) : (
              <samp className={`${style.circle}`}></samp>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

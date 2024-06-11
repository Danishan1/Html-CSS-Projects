import React, { useState, useRef } from "react";
import AlertContainer from "./AlertContainer";
import { v4 as uuidv4 } from "uuid";
import style from "../css/RegisterUserForm.module.css";
import { FormSection1 } from "./FormSection1";
import { FormSection3 } from "./FormSection3";

const UserForm = ({ orgId, createdBy }) => {
  const [formData, setFormData] = useState({
    userId: uuidv4().slice(0, 6).toUpperCase(),
    name: "",
    mobile: "",
    email: "",
    profilePic: "",
    status: "active",
    designation: "",
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
            />
          ) : (
            <FormSection3 showAlert={showAlert} formData={formData} />
          )}
        </form>
      </div>
    </div>
  );
};

export default UserForm;

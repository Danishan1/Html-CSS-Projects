import React, { useState, useRef, lazy, Suspense, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AlertContainer from "./AlertContainer";
import style from "../css/RegisterForm.module.css";
import ErrorPage from "../../SpecialPages/js/ErrorPage";
import Loading from "../../SpecialPages/js/Loading";
import { setFavicon } from "../../utils/setFavicon";
import { setDocumentTitle } from "../../utils/setDocumentTitle";

const FormSection1 = lazy(() =>
  import("./FormSection1").then((module) => ({ default: module.FormSection1 }))
);
const FormSection2 = lazy(() =>
  import("./FormSection2").then((module) => ({ default: module.FormSection2 }))
);
const FormSection3 = lazy(() =>
  import("./FormSection3").then((module) => ({ default: module.FormSection3 }))
);

const RegisterForm = ({ orgId = "ORG_ID", createdBy = "000000" }) => {
  setFavicon("itsRIGHTtime");
  setDocumentTitle("Register | itsRIGHTtime");

  // State for storing form data, initialized from localStorage if available.
  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          userId: "",
          name: "",
          mobile: "",
          email: "",
          profilePic: "",
          status: "active",
          designation: orgId === "ORG_ID" ? "User" : "",
          orgId: orgId,
          createdBy: createdBy,
          updatedBy: createdBy,
        };
  });

  // State for managing alert messages
  const [alertContainer, setAlertContainer] = useState([]);

  // State for tracking which step of the form is currently active, also persisted in localStorage.
  const [formFillStep, setFormFillStep] = useState(() => {
    const savedStep = localStorage.getItem("formFillStep");
    return savedStep ? parseInt(savedStep, 10) : 0;
  });

  const alertRef = useRef(null);

  // Function to display alerts in the AlertContainer.
  const showAlert = (message, type) => {
    if (alertRef.current) {
      alertRef.current.addAlert(message, type);
    }
  };

  // Persist form data in localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Persist the current form step in localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("formFillStep", formFillStep.toString());
  }, [formFillStep]);

  // Helper function to render the current form section based on the active step.
  const nextStep = (Element) => {
    return (
      <div className={style.formRapper}>
        <div className={style.userForm}>
          <Element
            setFormData={setFormData}
            formData={formData}
            showAlert={showAlert}
            setFormFillStep={setFormFillStep}
          />
          <div className={style.progress}>
            {/* Conditional rendering of the progress indicators based on the current form step */}
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
        </div>
      </div>
    );
  };

  // Wrapper function to navigate to the next form step or redirect based on the current step.
  const wrapperNextStep = (id, element) => {
    return formFillStep === id ? (
      nextStep(element)
    ) : (
      <Navigate to={`/register/${formFillStep}`} replace />
    );
  };

  return (
    <div>
      <AlertContainer
        ref={alertRef}
        setAlertContainer={setAlertContainer}
        alertContainer={alertContainer}
      />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={wrapperNextStep(0, FormSection1)} />
          <Route path="0" element={wrapperNextStep(0, FormSection1)} />
          <Route path="1" element={wrapperNextStep(1, FormSection2)} />
          <Route path="2" element={wrapperNextStep(2, FormSection3)} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default RegisterForm;

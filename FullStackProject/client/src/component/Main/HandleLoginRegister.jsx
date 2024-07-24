import React, { useState } from "react";
import RegisterForm from "../Registration/js/RegrsterUserForm";
import Login from "../Login/js/Login";

const HandleLoginRegister = () => {
  const orgId = "ORG_ID"; // Example orgId
  const createdBy = "Danishan"; // Example createdBy
  const [formVisiblity, setFormVisibility] = useState("login");

  return (
    <div className="HandleLoginRegister">
      {formVisiblity === "register" ? (
        <RegisterForm
          orgId={orgId}
          createdBy={createdBy}
          setFormVisiblity={setFormVisibility}
        />
      ) : (
        <Login setFormVisibility={setFormVisibility} />
      )}
    </div>
  );
};

export default HandleLoginRegister;

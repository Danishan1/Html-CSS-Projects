import React, { useState } from "react";
import UserForm from "../Registration/js/RegrsterUserForm";
import Login from "../Login/js/Login";

const HandleLoginRegister = () => {
  const orgId = "AAAAAA"; // Example orgId
  const createdBy = "AAAAAA"; // Example createdBy
  const [formVisiblity, setFormVisibility] = useState("login");

  return (
    <div className="HandleLoginRegister">
      {formVisiblity === "register" ? (
        <UserForm
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

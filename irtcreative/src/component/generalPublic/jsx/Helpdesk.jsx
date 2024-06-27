import React from "react";
import style from "../css/Helpdesk.module.css";
import CommingSoon from "./CommingSoon";

const Helpdesk = () => {
  return (
    <>
      <div className={style.helpdesk}>
              <CommingSoon
          text={
            "I am currently developing the 'Helpdesk' Layout feature. This update will be released shortly."
          }
        />
      </div>
    </>
  );
};

export default Helpdesk;

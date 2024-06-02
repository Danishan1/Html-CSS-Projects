// Code: ABAB028

import React from "react";
import style from "../css/ServicePage.module.css";
import NameCode from "./NameCode";

const ServicePage = ({
  serviceCode = "",
  ServiceName = "",
  DeptCode = "",
  DeptName = "",
  SectCode = "",
  SectName = "",
  DiviCode = "",
  DiviName = "",
  imgPath,
}) => {
  const styleComp = {
    backgroundImage: `url(${imgPath})`,
  };

  return (
    <>
      <div className={style.servicePage} style={styleComp}>
        <div className={style.serviceBox}>
          <div className={style.infoBox}>
            {DiviCode !== "" && <NameCode code={DiviCode} name={DiviName} />}
            {DeptCode !== "" && <NameCode code={DeptCode} name={DeptName} />}
            {SectCode !== "" && <NameCode code={SectCode} name={SectName} />}
            {serviceCode !== "" && (
              <NameCode code={serviceCode} name={ServiceName} />
            )}

            <div className={style.tutorial}>Get an Expert View</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;

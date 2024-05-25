import React from "react";
import style from "../css/Services.module.css";
import getServiceData from "../helper/services/jsx/getServiceData";
import Filter1 from "../helper/services/jsx/Filter1";
import Filter2 from "../helper/services/jsx/Filter2";

const Services = () => {
  const { columnNames, data } = getServiceData("Divisions");
  return (
    <>
      <div className={style.services}>
        <div className={style.leftSide}>
          <div className={style.filter1}>
            <Filter1 />
          </div>
          <div className={style.filter2}>
            <Filter2 />
          </div>
        </div>
        <div className={style.midSide}>
          <div className={style.filter3}></div>
          <div className={style.mainService}>
            <div>
              <h1>User List</h1>
              <ul>
                {data.map((user, index) => (
                  <li key={index}>{user[columnNames[2]]}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.tutorial}>Tutorials</div>
    </>
  );
};

export default Services;

import React from "react";
import style from "../css/showSegement.module.css";
import CategoryContainer from "./CategoryContainer";
import getInfoFromID from "./DataExtrector/getInfoFromID";

const ShowSegement = ({ id, data, title = "Title", setClickedValue }) => {
  const idInfo = getInfoFromID(id);
  title = title + idInfo[0].name;

  return (
    <>
      <div className={style.showSegement}>
        <p className={style.p1}>{title}</p>
        <div className={style.showContainer}>
          <CategoryContainer
            title={idInfo[0].name}
            list={data}
            setClickedValue={setClickedValue}
          />
        </div>
      </div>
    </>
  );
};

export default ShowSegement;

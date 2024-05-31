// Code:

import React, { useEffect, useState } from "react";
import style from "../css/MainService.module.css";
import getInfoFromID from "./DataExtrector/getInfoFromID";
import setVisibleAreaOfFilter1 from "./setVisibleAreaOfFilter1";
import setVisibleAreaOfSearch from "./setVisibleAreaOfSearch";

const MainService = ({ tab, clickCode }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (tab !== "") {
      setContent(setVisibleAreaOfFilter1(tab));
    }
  }, [tab]);

  useEffect(() => {
    if (clickCode !== "") {
      const data = getInfoFromID(clickCode);
      setContent(setVisibleAreaOfSearch(data))
    }
  }, [clickCode]);

  return (
    <>
      <div className={style.mainService}>{content}</div>
    </>
  );
};

export default MainService;

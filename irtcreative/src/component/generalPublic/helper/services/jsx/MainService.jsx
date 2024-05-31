// Code:

import React, { useEffect, useState } from "react";
import style from "../css/MainService.module.css";
import getInfoFromID from "./DataExtrector/getInfoFromID";
import setVisibleAreaOfFilter1 from "./setVisibleAreaOfFilter1";

const MainService = ({ tab, clickCode }) => {
  const [content, setContent] = useState(null);
  const [getInfoFromId, setGetInfoFromId] = useState(null);
  // let content, getInfoFromId;

  useEffect(() => {
    if (tab !== "") {
      setContent(setVisibleAreaOfFilter1(tab));
    }
  }, [tab]);

  useEffect(() => {
    if (clickCode !== "") {
      const data = getInfoFromID(clickCode);
      setGetInfoFromId(data);
    }
  }, [clickCode]);

  useEffect(() => {
    console.log(getInfoFromId);
  }, [getInfoFromId]);

  return (
    <>
      <div className={style.mainService}>{content}</div>
    </>
  );
};

export default MainService;

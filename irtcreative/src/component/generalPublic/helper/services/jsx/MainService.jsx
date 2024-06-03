// Code:

import React, { useEffect, useState } from "react";
import style from "../css/MainService.module.css";
import getInfoFromID from "./DataExtrector/getInfoFromID";
import setVisibleAreaOfFilter1 from "./setVisibleAreaOfFilter1";
import setVisibleAreaOfSearch from "./setVisibleAreaOfSearch";

const MainService = ({ tab, clickedSearchCode, clickedMainAreaCode }) => {
  const [content, setContent] = useState(null);
  const { clickedvalue, setClickedValue } = clickedMainAreaCode;

  useEffect(() => {
    if (tab === "" && clickedSearchCode === "" && clickedvalue === "")
      setContent(setVisibleAreaOfFilter1("hom"));
    if (tab !== "") {
      setContent(setVisibleAreaOfFilter1(tab, setClickedValue));
    }
  }, [tab, clickedSearchCode, clickedvalue, setClickedValue]);

  useEffect(() => {
    if (clickedSearchCode !== "") {
      const data = getInfoFromID(clickedSearchCode);
      setContent(setVisibleAreaOfSearch(data));
    }
  }, [clickedSearchCode]);

  useEffect(() => {
    if (clickedvalue !== "") {
      if (clickedvalue.length === 5) {
        const data = getInfoFromID(clickedvalue);
        setContent(setVisibleAreaOfSearch(data));
      } else {
        setContent(setVisibleAreaOfFilter1(clickedvalue, setClickedValue));
      }
    }
  }, [clickedvalue, setClickedValue]);

  return (
    <>
      <div className={style.mainService}>{content}</div>
    </>
  );
};

export default MainService;

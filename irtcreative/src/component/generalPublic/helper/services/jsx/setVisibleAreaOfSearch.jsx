import React from "react";
import ServicePage from "./ServicePage";
import getImageByID from "./DataExtrector/getImageByID.jsx";

const resolveImage = (imageId) => {
  let DIR = null;
  if (imageId.length === 1) DIR = "Division";
  else if (imageId.length === 2) DIR = "Department";
  else if (imageId.length === 3) DIR = "Sector";
  else if (imageId.length === 5) {
    DIR = "Sector";
    return getImageByID(imageId.substring(0, 3), DIR);
  }
  return getImageByID(imageId, DIR);
};

const resolveData = (data) => {
  const idLen = data.code.length;
  if (idLen === 1)
    return { "Division Code": data.code, "Division Name": data.name };
  else if (idLen === 2)
    return { "Department Code": data.code, "Department Name": data.name };
  else if (idLen === 3)
    return { "Sector Code": data.code, "Sector Name": data.name };
  else if (idLen === 5)
    return { "Service Code": data.code, "Service Name": data.name };
};

const setVisibleAreaOfSearch = (data) => {
  let resolvedData = {
    "Division Code": "",
    "Division Name": "",
    "Department Code": "",
    "Department Name": "",
    "Sector Code": "",
    "Sector Name": "",
    "Service Code": "",
    "Service Name": "",
  };

  data.forEach((row) => {
    const resolved = resolveData(row);
    Object.assign(resolvedData, resolved);
  });

  const content = (
    <ServicePage
      serviceCode={resolvedData["Service Code"]}
      ServiceName={resolvedData["Service Name"]}
      DeptCode={resolvedData["Department Code"]}
      DeptName={resolvedData["Department Name"]}
      SectCode={resolvedData["Sector Code"]}
      SectName={resolvedData["Sector Name"]}
      DiviCode={resolvedData["Division Code"]}
      DiviName={resolvedData["Division Name"]}
      imgPath={resolveImage(data[0].code)}
    />
  );

  return content;
};

export default setVisibleAreaOfSearch;

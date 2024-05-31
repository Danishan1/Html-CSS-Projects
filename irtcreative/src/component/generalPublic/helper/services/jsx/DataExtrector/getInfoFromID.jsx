import getDataByPage from "./getDataByPage";

const getInfoFromID = (id) => {
  const idLen = id.length;
  const { columnNames: deptColNames, data: deptData } =
    getDataByPage("Departments");
  const { columnNames: sectorColNames, data: sectorData } =
    getDataByPage("Sectors");
  const { columnNames: divisionColNames, data: divisionData } =
    getDataByPage("Divisions");
  const { columnNames: serviceColNames, data: serviceData } =
    getDataByPage("Services");

    
  switch (idLen) {
    case 1:
      const data = divisionData.filter(
        (row) => row[divisionColNames[1]] === id
      );
      console.log(idLen);
      console.log(data);
      break;
    case 2:
      break;
    case 3:
      break;
    case 5:
      break;
  }
};

export default getInfoFromID;

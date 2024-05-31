import getDataByPage from "./getDataByPage";

const getSearchedData = () => {
  const { columnNames: deptColNames, data: deptData } =
    getDataByPage("Departments");
  const { columnNames: sectorColNames, data: sectorData } =
    getDataByPage("Sectors");
  const { columnNames: divisionColNames, data: divisionData } =
    getDataByPage("Divisions");
  const { columnNames: serviceColNames, data: serviceData } =
    getDataByPage("Services");

  // Combine all data into a single list
  const searchData = [
    ...deptData.map((item) => ({
      code: item[deptColNames[1]],
      name: item[deptColNames[2]],
    })),
    ...sectorData.map((item) => ({
      code: item[sectorColNames[1]],
      name: item[sectorColNames[2]],
    })),
    ...divisionData.map((item) => ({
      code: item[divisionColNames[1]],
      name: item[divisionColNames[2]],
    })),
    ...serviceData.map((item) => ({
      code: item[serviceColNames[1]],
      name: item[serviceColNames[2]],
    })),
  ];

  // Filter out any undefined values
  return searchData.filter(Boolean);
};

export default getSearchedData;

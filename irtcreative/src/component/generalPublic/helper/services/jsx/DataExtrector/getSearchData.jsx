import getServiceData from "./getServiceData";

const getSearchedData = () => {
  const { columnNames: deptColNames, data: deptData } =
    getServiceData("Departments");
  const { columnNames: sectorColNames, data: sectorData } =
    getServiceData("Sectors");
  const { columnNames: divisionColNames, data: divisionData } =
    getServiceData("Divisions");
  const { columnNames: serviceColNames, data: serviceData } =
    getServiceData("Services");

  // Combine all data into a single list
  const searchData = [
    ...deptData.map((item) => ({
      code: item[deptColNames[1]],
      name: item[deptColNames[2]],
    })),
    ...sectorData.map((item) => ({
      code: item[sectorColNames[2]],
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

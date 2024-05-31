import getDataByPage from "./getDataByPage";

const getMatchedDataFromPage = (page, id) => {
  const { columnNames: colNames, data: pageData } = getDataByPage(page);
  const dataOfID = pageData.filter((row) => row[colNames[1]] === id);

  let ans = {};
  if (dataOfID.length > 0) {
    const row = dataOfID[0]; // Access the first matching row
    ans = { code: row[colNames[1]], name: row[colNames[2]] };
  }

  return ans;
};

const getInfoFromID = (id) => {
  const idLen = id.length;

  let data = [];

  if (idLen === 5)
    data = [...data, getMatchedDataFromPage("Services", id.substring(0, 5))];
  if (idLen >= 3)
    data = [...data, getMatchedDataFromPage("Sectors", id.substring(0, 3))];
  if (idLen >= 2)
    data = [...data, getMatchedDataFromPage("Departments", id.substring(0, 2))];
  if (idLen >= 1)
    data = [...data, getMatchedDataFromPage("Divisions", id.substring(0, 1))];

  return data;
};

export default getInfoFromID;

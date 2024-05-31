import getDataByPage from "./getDataByPage";

const getMatchedDataFromPage = (page, id) => {
  const { columnNames: colNames, data: pageData } = getDataByPage(page);
  const dataOfID = pageData.filter((row) => row[colNames[1]] === id);

  let ans = {};
  if (dataOfID)
    ans = { code: dataOfID[colNames[1]], name: dataOfID[colNames[2]] };

  return ans;
};

const getInfoFromID = (id) => {
  const idLen = id.length;

  let data = [{}];

  if (idLen === 5) data = [...data, getMatchedDataFromPage("Services", id)];
  if (idLen >= 3) data = [...data, getMatchedDataFromPage("Sectors", id)];
  if (idLen >= 2) data = [...data, getMatchedDataFromPage("Departments", id)];
  if (idLen >= 1) data = [...data, getMatchedDataFromPage("Divisions", id)];

  console.log(data)
};

export default getInfoFromID;

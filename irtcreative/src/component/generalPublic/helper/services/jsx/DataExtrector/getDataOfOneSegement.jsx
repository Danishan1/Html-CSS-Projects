import getDataByPage from "./getDataByPage";

const getDataOfOneSegement = (id) => {
  const idLen = id.length;
  let page;

  if (idLen === 1) page = "Departments";
  else if (idLen === 2) page = "Sectors";
  else if (idLen === 3) page = "Services";

  const { columnNames: DATACOL, data: DATA } = getDataByPage(page);

  let requiredData = DATA.filter(
    (row) => id === row[DATACOL[1]].substring(0, idLen)
  );

  requiredData = requiredData.map((row) => ({
    code: row[DATACOL[1]],
    name: row[DATACOL[2]],
  }));

  return requiredData;
};

export default getDataOfOneSegement;

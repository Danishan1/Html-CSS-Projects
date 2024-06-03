import getDataByPage from "./getDataByPage";

const getDataOfOneSegement = (id) => {
  const idLen = id.length;
  const { columnNames: DATACOL, data: DATA } = getDataByPage("Services");

  const requiredData = DATA.filter(
    (row) => id === row[DATACOL[1]].substring(0, idLen)
  );
  console.log(requiredData);

  return 1;
};

export default getDataOfOneSegement;

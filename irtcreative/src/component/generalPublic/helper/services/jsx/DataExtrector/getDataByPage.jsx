// Code: ABAB01A

import Data from "../../../../../../data/IRT Creative Structure";

const getDataByPage = (page) => {
  const data = Data[page];

  // Check if data exists
  if (!data || data.length === 0) {
    return {
      columnNames: [],
      data: [],
    };
  }

  // Get column names from the keys of the first object
  const columnNames = Object.keys(data[0]);

  return {
    columnNames,
    data,
  };
};

export default getDataByPage;

import Data from "../../../../../data/IRT Creative Structure.json";

const getServiceData = (page) => {
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

export default getServiceData;

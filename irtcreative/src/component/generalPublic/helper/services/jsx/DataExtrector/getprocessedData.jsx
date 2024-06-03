import getDataByPage from "./getDataByPage";

// Convert the Divisions into the key value pair of {DivisionCode:DivisionName}
const clusterListFun = (clusterName) => {
  const colmnName = clusterName.substring(0, clusterName.length - 1);
  const dict = {};
  const list4cluster = getDataByPage(clusterName).data;
  list4cluster.forEach((cluster) => {
    // cluster = Object.entries(cluster);
    dict[cluster[`${colmnName} Code`]] = {
      name: cluster[colmnName],
      code: cluster[`${colmnName} Code`],
    };
  });

  const codeLen = list4cluster[0][`${colmnName} Code`].length;

  return { dict, codeLen };
};

// Make a dist that ha list of Departments as value, and list4cluster as keys
const getprocessedData = (clusterName, listingName) => {
  const colmnName = listingName.substring(0, listingName.length - 1);
  const clusterList = clusterListFun(clusterName).dict;
  const codeLen = clusterListFun(clusterName).codeLen;
  const list4listing = getDataByPage(listingName).data;
  const finalSendableData = {};
  list4listing.forEach((listing) => {
    const codeLetters = listing[`${colmnName} Code`].substring(0, codeLen);
    const cluster = clusterList[codeLetters];
    if (cluster) {
      if (!finalSendableData[cluster.code]) {
        finalSendableData[cluster.code] = {
          name: cluster.name,
          list: [],
        };
      }
      finalSendableData[cluster.code].list.push({
        name: listing[colmnName],
        code: listing[`${colmnName} Code`],
      });
    }
  });

  return finalSendableData;
};

export default getprocessedData;

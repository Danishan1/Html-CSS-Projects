import getServiceData from "./getServiceData";

const services = getServiceData("Services").data;
const sectors = getServiceData("Sectors").data;

// Convert the Sectors into the key value pair of {DivisionCode:DivisionName}
const secListFun = () => {
  const dict = {};
  sectors.forEach((sector) => {
    dict[sector["Sector Code"]] = {
      name: sector.Sector,
      code: sector["Sector Code"],
    };
  });
  return dict;
};

// Make a dist that ha list of Services as value, and sectors as keys
const getSecSer = () => {
  const SectorList = secListFun();
  const secSer = {};
  services.forEach((ser) => {
    const firstThreeLetters = ser["Service Code"].substring(0, 3);

    const sector = SectorList[firstThreeLetters];
    if (sector) {
      if (!secSer[sector.code]) {
        secSer[sector.code] = {
          name: sector.name,
          list: [],
        };
      }
      secSer[sector.code].list.push({
        name: ser.Service,
        code: ser["Service Code"],
      });
    }
  });

  return secSer;
};

export default getSecSer;

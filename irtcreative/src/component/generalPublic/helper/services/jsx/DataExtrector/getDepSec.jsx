import getServiceData from "./getServiceData";

const departments = getServiceData("Departments").data;
const divisions = getServiceData("Divisions").data;

// Convert the Divisions into the key value pair of {DivisionCode:DivisionName}
const divListFun = () => {
  const dict = {};
  divisions.forEach((division) => {
    dict[division["Division Code"]] = {
      name: division.Division,
      code: division["Division Code"],
    };
  });
  return dict;
};

// Make a dist that ha list of Departments as value, and divisions as keys
const getDivDep = () => {
  const divisionList = divListFun();
  const divDep = {};
  departments.forEach((dept) => {
    const firstLetter = dept["Department Code"][0];
    const division = divisionList[firstLetter];
    if (division) {
      if (!divDep[division.code]) {
        divDep[division.code] = {
          name: division.name,
          list: [],
        };
      }
      divDep[division.code].list.push({
        name: dept.Department,
        code: dept["Department Code"],
      });
    }
  });

  return divDep;
};

export default getDivDep;

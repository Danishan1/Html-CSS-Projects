import getServiceData from "./getServiceData";

const departments = getServiceData("Departments").data;
const divisions = getServiceData("Divisions").data;

// Convert the Divisions into the key value pair of {DivisionCode:DivisionName}
const divListFun = () => {
  const dict = {};
  divisions.map(
    (division) => (dict[division["Division Code"]] = division.Division)
  );
  return dict;
};

// Make a dist that ha list of Departments as value, and divisions as keys
const getDivDep = () => {
  const divisionList = divListFun();
  const divDep = {};
  departments.forEach((dept) => {
    const firstLetter = dept["Department Code"][0];
    if (!divDep[divisionList[firstLetter]]) {
      divDep[divisionList[firstLetter]] = [];
    }
    divDep[divisionList[firstLetter]].push(dept.Department);
  });
  return divDep;
};

export default getDivDep;

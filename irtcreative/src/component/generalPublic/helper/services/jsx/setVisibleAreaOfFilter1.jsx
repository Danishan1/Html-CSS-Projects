import OnLoadScreen from "./onLoadScreen";
import MainShowContainer from "./MainShowContainer";
import getprocessedData from "./DataExtrector/getprocessedData";

const setVisibleAreaOfFilter1 = (tab) => {
  let content,
    data = [];
  switch (tab) {
    case "hom":
      content = <OnLoadScreen />;
      break;
    case "all":
      data = getprocessedData("Sectors", "Services");
      content = (
        <MainShowContainer
          data={data}
          title="All of our services are organized according to sectors"
        />
      );
      break;
    case "dep":
      data = getprocessedData("Divisions", "Departments");
      content = (
        <MainShowContainer
          data={data}
          title="All of our Departments are organized according to Divisions"
        />
      );
      break;
    case "div":
      data = getprocessedData("Divisions", "Divisions");
      content = <MainShowContainer data={data} title="All of our Divisions" />;
      break;
    case "sec":
      data = getprocessedData("Departments", "Sectors");
      content = (
        <MainShowContainer
          data={data}
          title="All of our Sectors are organized according to Departments"
        />
      );
      break;
    default:
      content = <OnLoadScreen />;
      break;
  }
  return content;
};

export default setVisibleAreaOfFilter1;

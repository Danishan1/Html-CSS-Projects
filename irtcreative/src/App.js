import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./component/util/jsx/TopLayout";
import Header from "./component/generalPublic/jsx/Header";
import MidLayout from "./component/generalPublic/jsx/MidLayout";
// import Header from "./component/generalPublic/helper/temp";
// import img3 from "./images/img1.jpg";

function App() {
  const [selectedTab, setSelectedTab] = useState(() => {
    const storedTab = localStorage.getItem("activeTab");
    return storedTab ? storedTab : "home";
  });
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  return (
    <>
      {/* <Header /> */}
      <Layout
        header={<Header onTabChange={handleTabChange} />}
        midLayout={<MidLayout selectedTab={selectedTab} />}
      />
    </>
  );
}

export default App;

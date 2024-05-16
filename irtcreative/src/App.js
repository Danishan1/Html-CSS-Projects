import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./component/util/jsx/TopLayout";
import Header from "./component/generalPublic/jsx/Header";
import MidLayout from "./component/generalPublic/jsx/MidLayout";

function App() {
  // For Getting tab where user left from local browser storage  ##########
  const [selectedTab, setSelectedTab] = useState(() => {
    const storedTab = localStorage.getItem("activeTab");
    return storedTab ? storedTab : "home";
  });

  // Function calling from child Component
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {}, [selectedTab]);

  // ##############################################

  return (
    <>
      {/* <Header /> */}
      <div className="App">
        <Layout
          header={<Header onTabChange={handleTabChange} />}
          midLayout={<MidLayout selectedTab={selectedTab} />}
        />
      </div>
    </>
  );
}

export default App;

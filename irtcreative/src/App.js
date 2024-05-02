import "./App.css";
import Layout from "./component/util/jsx/TopLayout";
import Header from "./component/generalPublic/jsx/header";
// import Header from "./component/generalPublic/helper/temp";
// import img3 from "./images/img1.jpg";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Layout header={<Header/>} midLayout="Mid Layout"/>
    </>
  );
}

export default App;

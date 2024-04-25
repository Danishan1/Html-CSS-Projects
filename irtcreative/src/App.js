import "./App.css";
import CardImg from "./component/util/jsx/Cards/CardTextSliding";
import img3 from "./images/img1.jpg";

function App() {
  const title = "Zero-cost Possibilities";
  const name = "Danishan";
  const desc =
    "Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever.";

  return (
    <>
      <CardImg imgPath={img3} name={name} title={title} desc={desc} borderCol="red" />
    </>
  );
}

export default App;

import "./App.css";
import CardImg from "./component/util/jsx/Cards/CardTextSliding";
import img3 from "./images/img2.jpg";

function App() {
  const title = "Zero-cost Possibilities";
  const name = "Danishan";
  const desc =
    "Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever.";

  return (
    <>
      <CardImg
        imgPath={img3}
        productName={name}
        producID="A324B48"
        desc={desc}
        orientation="H"
        color="cyan"
        
      />
    </>
  );
}

export default App;

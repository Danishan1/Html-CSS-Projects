import "./App.css";
import CardImg from "./component/util/jsx/Cards/CardTextOn";
import img3 from "./images/img1.jpg";

function App() {
  const name = "Danishan";
  const desc =
    "My Backbone Art";

  return (
    <>
      <CardImg
        imgPath={img3}
        authorName={name}
        productID="A324B48"
        desc={desc}
        date={"16, Jan 2023"}
        orientation="V"
        color="red"
      />
    </>
  );
}

export default App;

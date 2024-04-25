import "./App.css";
import { Button, ButtonLL } from "./component/util/jsx/Button";

function App() {
  return (
    <>
      <Button text={"Button"} link="https://www.google.com/" />
      <p>A</p>
      <ButtonLL text={"B"} link="https://www.google.com/" />
    </>
  );
}

export default App;

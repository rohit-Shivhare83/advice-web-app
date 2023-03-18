import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Compo1 from "./component/compo1/Compo1";

function App() {
  const [ad, setAdvice] = useState([]);
  const url = "https://api.adviceslip.com/advice";

  const fetchAdvice = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(setAdvice(response.data.slip.advice));
        // console.log(response.data.slip);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAdvice();
  });

  return (
    <div className="App text-align-center">
      <div className="container text-center my-3 ">
        <h1>Random Quotes generator</h1>
      </div>
      <div className=" button d-grid gap-2 col-6  mx-auto my-5">
        <button
          className="btn btn-primary mx-auto btn-lg fs-2"
          type="button"
          onClick={fetchAdvice}
        >
          Generate Quote
        </button>
      </div>
      <Compo1 advice={ad} />
    </div>
  );
}

export default App;

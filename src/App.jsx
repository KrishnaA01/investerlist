import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("mock.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <h2>Inventory Dashboard</h2>
      <Table data={data} />
      <ul>
        {data &&
          data.length > 0 &&
          data.map((item) => <li key={uuidv4()}>{item.Hersteller}</li>)}
      </ul>
    </>
  );
}

export default App;

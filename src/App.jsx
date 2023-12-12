import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col mt-20">
        <h4 className="font-bold text-gray-600">Inventory Records</h4>
        <Table data={data} />
      </div>
    </>
  );
}

export default App;

// const getData = () => {
//   fetch("mock.json", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (myJson) {
//       console.log(myJson);
//       setData(myJson);
//     });
// };

// useEffect(() => {
//   getData();
// }, []);

{
  /* <ul>
        {data &&
          data.length > 0 &&
          data.map((item) => <li key={uuidv4()}>{item.Hersteller}</li>)}
      </ul> */
}

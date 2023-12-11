import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import './App.css';




function App() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  // const arrayDataItems = devices.map(item => 
  //   <li key={item.id}>
  //     <p>{item.deviceName}</p>
  //     <span>{item.description}</span>
  //   </li>
  // )


  return (
    <>
      <Navbar /> 
      {data.map((dataObj, index) => {
          return (
            <div key={dataObj.id}>
              <p>{dataObj.name}</p>
            </div>
          );
        })}
    </>
  )
}

export default App

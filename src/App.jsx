import { useState } from "react";
import Navbar from "./components/Navbar";
import { MyContext } from "./MyContext";
import Table from "./components/Table";

import "./App.css";
import Addrow from "./components/Addrow";

function App() {
  const [data, setData] = useState([
    { id: 1, benutzer: "Lange", gerätename: "EEG076", hersteller: "Dell" },
    { id: 2, benutzer: "Nsair", gerätename: "EEG104", hersteller: "Microsoft" },
    { id: 3, benutzer: "John", gerätename: "EEG151", hersteller: "Microsoft" },
    { id: 4, benutzer: "Mike", gerätename: "EEG153", hersteller: "Lenovo" },
    { id: 5, benutzer: "Lange", gerätename: "EEG076", hersteller: "Dell" },
    { id: 6, benutzer: "Nsair", gerätename: "EEG104", hersteller: "Microsoft" },
    { id: 7, benutzer: "John", gerätename: "EEG151", hersteller: "Microsoft" },
    { id: 8, benutzer: "Mike", gerätename: "EEG153", hersteller: "Lenovo" },
  ]);

  const [newRow, setNewRow] = useState({
    benutzer: "",
    gerätename: "",
    hersteller: "",
  });

  const [editingRow, setEditingRow] = useState(null);

  const handleAddRow = () => {
    setData([...data, { id: data.length + 1, ...newRow }]);
    setNewRow({ benutzer: "", gerätename: "", hersteller: "" });
  };

  const handleDeleteRow = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const handleEditRow = (id) => {
    setEditingRow(id);
  };

  const handleSaveEdit = (id) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id
          ? {
              ...row,
              benutzer: editingRow === id ? newRow.benutzer : row.benutzer,
              gerätename:
                editingRow === id ? newRow.gerätename : row.gerätename,
              hersteller:
                editingRow === id ? newRow.hersteller : row.hersteller,
            }
          : row
      )
    );
    setEditingRow(null);
    setNewRow({ benutzer: "", gerätename: "", hersteller: "" });
  };

  return (
    <div>
      <MyContext.Provider
        value={{
          data,
          setData,
          editingRow,
          setEditingRow,
          newRow,
          setNewRow,
          handleSaveEdit,
          handleEditRow,
          handleDeleteRow,
          handleAddRow,
        }}
      >
        <Navbar />
        <div className="flex justify-center items-center flex-col mt-20">
          <div>
            <h1 className="font-bold text-gray-600 text-2xl mb-10">
              Inventarlisten
            </h1>
          </div>
          {/* inputfield where you type in username device name manufacturer */}
          <Addrow />
          {/* data table */}
          <Table />
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;

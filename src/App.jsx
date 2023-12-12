import { useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

import "./App.css";

function App() {
  const [data, setData] = useState([
    { id: 1, benutzer: "Lange", gerätename: "EEG076", hersteller: "Dell" },
    { id: 2, benutzer: "Nsair", gerätename: "EEG104", hersteller: "Microsoft" },
    { id: 3, benutzer: "John", gerätename: "EEG151", hersteller: "Microsoft" },
  ]);

  const [editingRow, setEditingRow] = useState(null);

  const [newRow, setNewRow] = useState({
    benutzer: "",
    gerätename: "",
    hersteller: "",
  });

  // handles add row into table
  const handleAddRow = () => {
    setData([...data, { id: data.length + 1, ...newRow }]);
    setNewRow({ benutzer: "", gerätename: "", hersteller: "" });
  };

  //handles deleting
  const handleDeleteRow = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const handleEditRow = (id) => {
    setEditingRow(id);
    console.log("handledit=>", id);
  };

  //handles edited info
  const handleSaveEdit = (id, updatedData) => {
    setData(
      data.map((row) => (row.id === id ? { ...row, ...updatedData } : row))
    );
    setEditingRow(null);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col mt-20">
        <h4 className="font-bold text-gray-600 text-lg">Inventory Records</h4>
        <Table
          data={data}
          editingRow={editingRow}
          handleDeleteRow={handleDeleteRow}
          handleEditRow={handleEditRow}
          handleSaveEdit={handleSaveEdit}
        />
        <div>
          <input
            className="input input-bordered mr-2"
            placeholder="Benutzer"
            value={newRow.benutzer}
            onChange={(e) => setNewRow({ ...newRow, benutzer: e.target.value })}
          />
          <input
            className="input input-bordered mr-2"
            placeholder="Gerätename"
            value={newRow.gerätename}
            onChange={(e) =>
              setNewRow({ ...newRow, gerätename: e.target.value })
            }
          />
          <input
            className="input input-bordered mr-2"
            placeholder="Hersteller"
            value={newRow.hersteller}
            onChange={(e) =>
              setNewRow({ ...newRow, hersteller: e.target.value })
            }
          />
          <button className="btn btn-outline btn-info" onClick={handleAddRow}>
            Add Row
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

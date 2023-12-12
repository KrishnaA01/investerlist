import { useState } from "react";
import Navbar from "./components/Navbar";

import "./App.css";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([
    { id: 1, benutzer: "Lange", gerätename: "EEG076", hersteller: "Dell" },
    { id: 2, benutzer: "Nsair", gerätename: "EEG104", hersteller: "Microsoft" },
  ]);

  const [editingRow, setEditingRow] = useState(null);

  const [newRow, setNewRow] = useState({
    benutzer: "",
    gerätename: "",
    hersteller: "",
  });

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
        <h4 className="font-bold text-gray-600">Inventory Records</h4>
        <Table
          data={data}
          editingRow={editingRow}
          handleDeleteRow={handleDeleteRow}
          handleEditRow={handleEditRow}
          handleSaveEdit={handleSaveEdit}
        />
        <div>
          <input
            placeholder="Benutzer"
            value={newRow.benutzer}
            onChange={(e) => setNewRow({ ...newRow, benutzer: e.target.value })}
          />
          <input
            placeholder="Gerätename"
            value={newRow.gerätename}
            onChange={(e) =>
              setNewRow({ ...newRow, gerätename: e.target.value })
            }
          />
          <input
            placeholder="Hersteller"
            value={newRow.hersteller}
            onChange={(e) =>
              setNewRow({ ...newRow, hersteller: e.target.value })
            }
          />
          <button onClick={handleAddRow}>Add Row</button>
        </div>
      </div>
    </>
  );
}

export default App;

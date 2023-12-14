import { useState } from "react";
import Navbar from "./components/Navbar";
// import Table from "./components/Table";

import "./App.css";

function App() {
  const [data, setData] = useState([
    { id: 1, benutzer: "Lange", gerätename: "EEG076", hersteller: "Dell" },
    { id: 2, benutzer: "Nsair", gerätename: "EEG104", hersteller: "Microsoft" },
    { id: 3, benutzer: "John", gerätename: "EEG151", hersteller: "Microsoft" },
    { id: 4, benutzer: "Mike", gerätename: "EEG153", hersteller: "Lenovo" },
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
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col mt-20">
        <div>
          <h1 className="font-bold text-gray-600 text-2xl mb-10">
            Inventarlisten
          </h1>
        </div>
        <div className="mb-10">
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
        {/* data table */}
        <div className="overflow-x-auto">
          <table className="table text-lg">
            <thead>
              <tr className="text-lg">
                <th></th>
                <th>Benutzer</th>
                <th>Gerätename</th>
                <th>Hersteller</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>
                    {editingRow === row.id ? (
                      <input
                        value={newRow.benutzer}
                        onChange={(e) =>
                          setNewRow({ ...newRow, benutzer: e.target.value })
                        }
                      />
                    ) : (
                      row.benutzer
                    )}
                  </td>
                  <td>
                    {editingRow === row.id ? (
                      <input
                        value={newRow.gerätename}
                        onChange={(e) =>
                          setNewRow({ ...newRow, gerätename: e.target.value })
                        }
                      />
                    ) : (
                      row.gerätename
                    )}
                  </td>
                  <td>
                    {editingRow === row.id ? (
                      <input
                        value={newRow.hersteller}
                        onChange={(e) =>
                          setNewRow({ ...newRow, hersteller: e.target.value })
                        }
                      />
                    ) : (
                      row.hersteller
                    )}
                  </td>
                  <td>
                    {editingRow === row.id ? (
                      <button
                        className="btn btn-outline btn-info"
                        onClick={() => handleSaveEdit(row.id)}
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          className="mr-2 btn btn-outline btn-info"
                          onClick={() => handleEditRow(row.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-outline btn-secondary"
                          onClick={() => handleDeleteRow(row.id)}
                        >
                          X
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;

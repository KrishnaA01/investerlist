import { useContext } from "react";
import { MyContext } from "../MyContext";

const Table = () => {
  const {
    data,
    editingRow,
    newRow,
    setNewRow,
    handleSaveEdit,
    handleEditRow,
    handleDeleteRow,
  } = useContext(MyContext);
  return (
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
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
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
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
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
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
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
  );
};

export default Table;

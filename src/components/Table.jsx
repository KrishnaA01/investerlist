export default function Table({
  data,
  editingRow,
  handleDeleteRow,
  handleEditRow,
  handleSaveEdit,
}) {
  console.log("from table", data);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Benutzer</th>
            <th>Gerätename</th>
            <th>Hersteller</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                {editingRow === row.id ? (
                  <input value={row.benutzer} />
                ) : (
                  row.benutzer
                )}
              </td>
              <td>
                {editingRow === row.id ? (
                  <input value={row.gerätename} />
                ) : (
                  row.gerätename
                )}
              </td>
              <td>
                {editingRow === row.id ? (
                  <input value={row.hersteller} />
                ) : (
                  row.hersteller
                )}
              </td>
              <td>
                {editingRow === row.id ? (
                  <button
                    onClick={() =>
                      handleSaveEdit(row.id, {
                        benutzer: "updated",
                        gerätename: "updated",
                        hersteller: "updated",
                      })
                    }
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button onClick={() => handleEditRow(row.id)}>Edit</button>
                    <button onClick={() => handleDeleteRow(row.id)}>
                      Delete
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
}

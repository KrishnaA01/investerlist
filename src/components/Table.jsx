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
          {/* row  */}
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
                    className="btn btn-outline btn-info"
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
}

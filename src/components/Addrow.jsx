import { useContext } from "react";
import { MyContext } from "../MyContext";

const Addrow = () => {
  const { newRow, setNewRow, handleAddRow } = useContext(MyContext);
  return (
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
        onChange={(e) => setNewRow({ ...newRow, gerätename: e.target.value })}
      />
      <input
        className="input input-bordered mr-2"
        placeholder="Hersteller"
        value={newRow.hersteller}
        onChange={(e) => setNewRow({ ...newRow, hersteller: e.target.value })}
      />
      <button className="btn btn-outline btn-info" onClick={handleAddRow}>
        Add Row
      </button>
    </div>
  );
};

export default Addrow;

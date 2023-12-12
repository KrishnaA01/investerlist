import { v4 as uuidv4 } from "uuid";

export default function Table({ data }) {
  // console.log("from table", data);

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
          <tr>
            <th>1</th>
            <td>Lange</td>
            <td>EEG101</td>
            <td>Microsoft</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Koch</td>
            <td>EEG117</td>
            <td>Microsoft</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Caesar</td>
            <td>EEG119</td>
            <td>Dell</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

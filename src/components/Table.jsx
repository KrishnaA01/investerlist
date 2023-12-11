import { v4 as uuidv4 } from 'uuid';


export default function Table({ data }) {
// console.log("from table", data)



  return (
    <div className="overflow-x-auto">
       {/* {
        data && data.length > 0 && data.map((item)=><li key={uuidv4()}>{item.Hersteller}</li>)
        } */}
        {data && data.map((item) => {
            return (
                <table className="table" key={uuidv4()}>
                {/* head */}
                <thead>
                <tr key={uuidv4()}>
                    <th>Benutzer</th>
                    <th>Gerätename</th>
                    <th>Hersteller</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                    <td>{item.Benutzer}</td>
                    <td>{item.Gerätename}</td>
                    <td>{item.Gerätename}</td>
                </tr>
                </tbody>
            </table>
            )
        })

        }
  
    </div>
  )
}

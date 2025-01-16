import { useState } from "react";
interface array{
  id:number;
  d:string;
  a:number;
  i:string;
}
interface Props{
  newData: array[];
}



const Table = ({newData} : Props) => {
  const [idt, setId] = useState(1);
  const [datas, setData] = useState([
    { id: 0, des: "empty", amount: 0, item: "no elements" },
  ]);
  console.log('Table ');
  console.log(newData);
  

  return (
    <>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Descrition</th>
            <th scope="col">Amount</th>
            <th scope="col">Items</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((data) => (
            data.id===0?
            <></>
            :

              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.d}</td>
                <td>{data.a}</td>
                <td>{data.i}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

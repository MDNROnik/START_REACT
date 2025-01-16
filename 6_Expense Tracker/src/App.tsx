
import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [newData, setData] = useState([
    { id: 0, d: "empty", a: 0, i: "no elements" },
  ]);


  const fun = ( des: string, amount: number, option: string)=>{
    console.log("APP");
    
    let index = newData.length;
    console.log(index);
    
    setData(
      [
        ...newData,{id:index, d:des, a:amount, i:option}
      ]
    );
    console.log(newData);
    
  }
  return (
    <>
      <Form fun={fun}/>
      <br />
      <br />
      <h1>HELLO</h1>

      <Table newData={newData}/>
    </>
  )
}

export default App

import { useState } from "react";
import Buttons from "./Components/Buttons";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const colors = ["red", "green", "white", "black"];
  const currentColor = color;
  const mes = (c) => {
    setColor(c);
  };

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {colors.map((value, index) => {
              return <Buttons key={index} c={value} m={mes} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

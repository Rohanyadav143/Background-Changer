import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  let colors = ["red", "blue", "green", "yellow", "pink", "gray", "black", "violet", "skyblue", "purple"];
  let [clr, setColor] = useState(colors[0]);
  

  return (
    <>
      <div className="text-white h-100ch">
        <p className="min-h-screen" style={{ backgroundColor: clr }}>
          {
            colors.map((color, index) => (<Button key={index} color={color} clicked={()=>setColor(color)} />))
          }
        </p>
      </div>
    </>
  );
}

export default App;


import react, { createContext, useState } from "react";
import ComponentA from "./pages/ComponentA";
import ComponentB from "./pages/ComponentB";
import ComponentC from "./pages/ComponentC";
import "./styles.css";

export const myContext = createContext();
export const myContextSec = createContext();
export default function App() {
  const [childData, setChildData] = useState();
  const obj = {
    fname: "Siyaram",
    lname: "Kumar",
    fullName: function () {
      console.log("s", this);
      return this.fname + " " + this.lname;
    }
  };
  function childDataFu(data) {
    console.log("childData ", data);
    setChildData(data);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        Goted Data from Component C : <h2>{childData}</h2>
      </div>

      <myContext.Provider value={{ obj, childDataFu }}>
        <myContextSec.Provider value="Aranav">
          <ComponentC />
          <ComponentB />
          <ComponentA />
        </myContextSec.Provider>
      </myContext.Provider>
    </div>
  );
}

import React, { Component, useContext } from "react";
import { myContext, myContextSec } from "../App";

const ComponentB = () => {
  const contextData = useContext(myContext);
  const contextSec = useContext(myContextSec);
  console.log("context ", contextData);
  console.log("contextSec ", contextSec);
  return (
    <>
      <h2>ComponentB</h2>
      {contextData.obj.fname}
      <div>{contextData.obj.lname}</div>
      <div>{contextData.obj.fullName()}</div>
      <div>{contextData.childDataFu("Send Data From Component B Child")}</div>
      {contextSec}
    </>
  );
};
export default ComponentB;

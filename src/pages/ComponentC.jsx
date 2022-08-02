import React, { Component } from "react";
import { myContext, myContextSec } from "../App";

const ComponentC = () => {
  return (
    <>
      <h2>ComponentC</h2>
      <myContext.Consumer>
        {(data) => {
          return (
            <>
              <myContextSec.Consumer>
                {(sec) => (
                  <>
                    {console.log(sec)}

                    {console.log("data", data)}
                    <div>{data.obj.fname}</div>
                    <div>{data.obj.lname}</div>
                    <div>{data.obj.fullName()}</div>
                    <div>
                      {data.childDataFu("Send Data From Component C Child")}
                    </div>
                    <div>
                      <strong>{sec}</strong> is comming from from myContextSec
                      context
                    </div>
                  </>
                )}
              </myContextSec.Consumer>
            </>
          );
        }}
      </myContext.Consumer>
    </>
  );
};
export default ComponentC;

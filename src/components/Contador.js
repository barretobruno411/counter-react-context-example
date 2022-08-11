import React, { useContext } from "react";
import "./Contador.css";

const Contador = () => {
  return (
    <main className="main">
      <h1>0</h1>
      <div className="buttons">
        <button
        className="button plus"
        >
          {" "}
          +{" "}
        </button>
        <button
        className="button less"
        > - </button>
      </div>
    </main>
  );
};

export default Contador;

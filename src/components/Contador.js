import React, { useContext } from "react";
import { CreatedContext } from "../ContextProvider";
import "./Contador.css";

const Contador = () => {
  const [conter, setConter] = useContext(CreatedContext)
  return (
    <main className="main">
      <h1>{conter}</h1>
      <div className="buttons">
        <button
        className="button plus"
        onClick={() => setConter(prev => prev + 1)}
        >
          {" "}
          +{" "}
        </button>
        <button
        className="button less"
        onClick={() => setConter(prev => prev - 1)}
        > - </button>
      </div>
    </main>
  );
};

export default Contador;

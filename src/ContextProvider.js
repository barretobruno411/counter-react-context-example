import { createContext, useState } from "react";

export const CreatedContext = createContext();

export const ContextProvider = (props) => {
  const [conter, setConter] = useState(2);

  return <CreatedContext.Provider value={[conter,setConter]}>{props.children}</CreatedContext.Provider>;
};

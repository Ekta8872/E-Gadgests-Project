import { useState } from "react";
import UserContext from "./userContext";

const ContextProvider = (props) => {
  const [state, setState] = useState();

  return (
    <>
      <UserContext.Provider value={state}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};
export default ContextProvider;

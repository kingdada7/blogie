import { Children } from "react";
import { createContext } from "react";

const AppContext = createContext();

export default AppProvider = ({ Children }) => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

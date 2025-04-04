/** @format */

import React, { createContext, useState } from "react";
import { rowData } from "./appData";

export const ProductContext = createContext();

const ContextProvider = ({ children }) => {
  const [allData, setAllData] = useState(rowData);

  console.log(allData);

  return (
    <ProductContext.Provider value={{ allData, setAllData }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;

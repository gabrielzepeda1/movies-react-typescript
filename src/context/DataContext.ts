import React, { createContext, useState } from "react";

export const DataContext = createContext();

const dataFixed = {
  name: "Gabriel",
  edad: "22",
};

export const DataProvider = ({ children  }) => {
  const [data, setData] = useState(dataFixed);

  return <DataContext.Provider>{children}</DataContext.Provider>;
};

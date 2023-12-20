import React, { createContext, useState } from "react";

interface Data {
  name: string;
  age: string;
}

interface DataContextProps {
  data: Data;
  updateData: (data: Data) => void;
}

const dataFixed: Data = {
  name: "Gabriel",
  age: "22",
};

interface DataProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);

const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<Data>(dataFixed);
  
  const updateData = (data: Data) => {
    setData(data);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;

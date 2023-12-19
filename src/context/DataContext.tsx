import React, { createContext, useState, ReactNode } from "react";

interface Data {
  name: string;
  edad: string;
}

interface DataContextProps {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}

const dataFixed: Data = {
  name: "Gabriel",
  edad: "22",
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);

const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<Data>(dataFixed);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;

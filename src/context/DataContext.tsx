import { createContext, useState } from "react";
import {
  DataChildren,
  DataContextProps,
  DataProviderProps,
} from "../customTypes";
import { convertToLowerCase } from "../helpers";

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);

const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataChildren>({
    title: "",
    year: "",
    imdbid: "",
    type: "",
    poster: "",
  });

  const [queryParam, setQueryParam] = useState<string>("superman");

  const fetchMovie = async () => {
    await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${queryParam}`, {
      method: "GET",
    })
      .then((response: any) => response.json())
      .then((data: any) => {
        const { Search } = data;
        const transformedResponse = Search.map((item: DataChildren) => {
          return convertToLowerCase(item);
        });
        setData(transformedResponse || []);
      });
  };

  return (
    <DataContext.Provider
      value={{ data, fetchMovie, queryParam, setQueryParam }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;

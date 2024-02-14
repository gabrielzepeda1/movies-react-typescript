import { createContext, useCallback, useEffect, useState } from "react";
import {
  DataChildren,
  DataContextProps,
  DataProviderProps,
} from "../customTypes";
import { convertToLowerCase } from "../helpers";

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

export const DataContext = createContext<DataContextProps>({
  data: [],
  fetchMovie: () => {},
  queryParam: "",
  setQueryParam: () => {},
  fetchError: "",
  setFetchError: () => {},
});

const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataChildren[]>([]);

  const [queryParam, setQueryParam] = useState<string>("superman");

  const [fetchError, setFetchError] = useState<string>("");

  const apiUrl = "http://www.omdbapi.com/?apikey=";

  const fetchMovie = useCallback(async () => {
    try {
      const response = await fetch(
        `${apiUrl}${apiKey}&s=${queryParam}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const { Search } = data;

      if (Search) {
        const transformedResponse = Search.map((item: DataChildren) => {
          return convertToLowerCase(item);
        });
        setData(transformedResponse);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setFetchError("An unexpected error occurred while fetching the data!");
    }
  }, [queryParam]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie, queryParam]);
  return (
    <DataContext.Provider
        value={{
        data,
        fetchMovie,
        queryParam,
        setQueryParam,
        fetchError,
        setFetchError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
import { Dispatch, SetStateAction } from "react";

export type MovieInfoProps = {
    data: DataChildren[];
  };
  
  export type DataChildren = {
    title: string;
    year: string;
    imdbid: string;
    type: string;
    poster: string;
  };
  
  export interface DataContextProps {
    data: DataChildren;
    fetchMovie: () => void;
    queryParam: string;
    setQueryParam: Dispatch<SetStateAction<string>>
  }

  export interface DataProviderProps {
    children: JSX.Element | JSX.Element[];
  }

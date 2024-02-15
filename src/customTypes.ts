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
  data: DataChildren[];
  fetchMovie: () => void;
  queryParam: string;
  setQueryParam: Dispatch<SetStateAction<string>>;
  fetchError: string;
  setFetchError: Dispatch<SetStateAction<string>>;
};

export interface DataProviderProps {
  children: JSX.Element | JSX.Element[];
};

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>;

export type ErrorAlertProps = {
  alertErrorMessage: string | null;
};

import { useContext, useState } from "react";
import "./App.css";
import MovieInfo from "./components/MovieInfo";
import { DataContext } from "./context/DataContext";
import { ButtonClickEvent, ChangeEvent } from "./customTypes";
import ErrorAlert from "./components/ErrorAlert";
function App() {
  const { data, queryParam, setQueryParam, fetchError } =
    useContext(DataContext);
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearchInputChange = (e: ChangeEvent) => {
    setSearchValue(e.target.value);
  };
  const handleFetchButtonClick = (_event: ButtonClickEvent) => {
    setQueryParam(searchValue);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>React Movie App</h1>
        <p>
          Showing results for <span className="text-warning">{queryParam}</span>
        </p>
        <div className="px-4 input-group mb-3">
          <input
            onChange={handleSearchInputChange}
            type="text"
            className="form-control"
            placeholder="Type your search"
            aria-label="Fetch Data"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-primary w-25"
            type="button"
            id="button-addon2"
            onClick={handleFetchButtonClick}
          >
            Search
          </button>
        </div>
        {fetchError ? (
          <ErrorAlert alertErrorMessage={fetchError} />
        ) : (
          <div className="d-flex">
            {data.length > 0 ? (
              <MovieInfo data={data} />
            ) : (
              <h1 className="lead text-info">No results found...</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
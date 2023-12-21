import { useContext, useEffect, useState } from "react";
import "./App.css";
import MovieInfo from "./components/MovieInfo";
import DataProvider, { DataContext } from "./context/DataContext";

function App() {
  const context = useContext(DataContext);
  console.log(context?.data)

  useEffect(() => {
    context?.fetchMovie();
  }, [context]);

  return (
    <DataProvider>
      <div className="App">
        <h1>React Movie App</h1>
        <div className="d-flex">
          {/* {context?.data && <MovieInfo data={context?.data} />} */ }
          gabriel 
        </div>
      </div>
    </DataProvider>
  );
}

export default App;

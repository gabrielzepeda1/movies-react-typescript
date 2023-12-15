import { useEffect, useState } from 'react';
import './App.css';
import MovieInfo from './components/MovieInfo';

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  
  const [data, setData] = useState([]);
  
  useEffect(() => { 

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=superman`, { 
      method: "GET"
    })
    .then((response: any) => response.json())
    .then((data: any) => { 
      setData(data.Search || []);
    });
  }, [])

  return (
    <div className="App">
      <h1>
        JSON Data Visualization
      </h1>
        <div className='d-flex'>
          <MovieInfo data={data} />
        </div>
    </div>
  
  );
}

export default App;

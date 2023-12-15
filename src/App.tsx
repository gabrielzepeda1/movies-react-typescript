import { useEffect, useState } from 'react';
import './App.css';

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  
  const [data, setData] = useState([]);
  
  useEffect(() => { 

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=batman`, { 
      method: "GET"
    })
    .then((response: any) => response.json())
    .then((data: any) => { 
      setData(data.Search || []);
    });
  }, [])

  
  return (
    <div className="App">
        <pre>{JSON.stringify({ data }, null, 2)}</pre>
    </div>
  
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import './Movie';
import Movie from './Movie';

function App() {
  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      ).json();
    setMovies(json.data.movies);
    setloading(false);
  }
  useEffect( ()=> {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? ( <h1>loading...</h1> ) : (
        <div>
          {movies.map((movie) => (
            <Movie 
              key={movie.id}
              coverImg={movie.medium_cover_image} 
              genres={movie.genres} 
              summary={movie.summary} 
              title={movie.title}   
              />
          )

          )}
          </div>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import "./Home.modules.css"

function Home(){
  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year")
      ).json();
    setMovies(json.data.movies);
    console.log(movies);
    setloading(false);
  }
  useEffect( ()=> {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? <Loading /> : 
        (
          <div >
            <div className="home-title">Movie List</div>
            <div className="movie-list">
              {movies.map((movie) => (
                  <Movie 
                    id={movie.id}
                    key={movie.id}
                    coverImg={movie.medium_cover_image} 
                    genres={movie.genres} 
                    title={movie.title}  
                    /> 
                  )
              )} </div> 
          </div>
      )}
    </div>
  );
}

export default Home;
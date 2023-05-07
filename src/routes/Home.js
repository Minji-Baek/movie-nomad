import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import "./Home.modules.css"

function Home(){
  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [range, setRange] = useState(9);
  useEffect( ()=> {
    setloading(true);
    return getMovies;
  }, [range]);
  
  const getMovies = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=${range}&sort_by=year`)
      ).json();
    setMovies(json.data.movies);
    setloading(false);
  }

  const onChange = (e) => {
    setRange((current) => current = e.target.value)
  }

  return (
    <div>
          <div >
            <div className="home-title">
                Movie List
                <div className="home-title-range">
                  <input  type="range" id="rating-slider" name="rating-slider" min="0.0" max="10" step="0.1" value={range} onChange={onChange}></input>
                  <label style={{padding: '8px'}} htmlFor="rating-slider">{range}</label>
                </div>
             
            </div>
            {loading ? <Loading /> : 
            (
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
                          )} 
              </div> 
              )}
            </div>
    </div>
  );
}

export default Home;
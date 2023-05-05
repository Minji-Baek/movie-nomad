import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Detail from "../components/Detail";
import Loading from "../components/Loading";
import "./Home.modules.css"

function Screen() {
  const {id} = useParams();
  const [loading, setloading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(json);
      setMovie(json.data.movie);
      setloading(false);
  };
  useEffect( () => {
    getMovie();
  }, []);
  return (
    <div >
      {loading ? <Loading />  : (
          <Detail 
            coverImg={movie.medium_cover_image}
            title={movie.title}
            genres={movie.genres}
            year={movie.year}
            rating={movie.rating}
            language={movie.language} 
            runtime={movie.runtime}
            url={movie.url}
          />
     )}
  </div>
  )
}
export default Screen;
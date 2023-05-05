import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
function Movie({coverImg, title, genres, id}) {
  return (<div style={{textAlign: 'center'}}>
    <img src={coverImg} alt={title} />ㄴㅇ
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
    
    <ul>
      {genres.map((g)=>(
       <li key={g}>{g}</li>
      ))}
    </ul>

  </div>);
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
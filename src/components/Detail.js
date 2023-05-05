import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

function Detail({coverImg, title, genres, year, rating ,language, runtime, url}) {
  const [time, setTime] = useState(0);
  const [genreStr, setGenstr] = useState("");

  useEffect( () => {
    setTime((current) => current = Math.trunc(runtime/60))
    console.log("time",time);
    setGenstr((currnetStr) => currnetStr = genres.join(' / '));
  } , []);

  return (
    <div style={{textAlign: 'center'}}>
        <img src={coverImg} alt={title} />
        <p>{title}</p>
        <p>{year}</p>
        <p>{genreStr}</p>
        <p>{rating} / 10 </p> 
        <p>{language}</p>
        <p>{time}</p> hours <p> {runtime - (time*60) }</p> mins 
    </div>
  );
}

Detail.propTypes = {
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
  year : PropTypes.number.isRequired,
  rating : PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,

};

export default Detail;



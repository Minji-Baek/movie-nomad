import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import "./Detail.Modules.css"

function Detail({coverImg, title, genres, year, rating ,language, runtime, url}) {
  const [time, setTime] = useState(0);
  const [genreStr, setGenstr] = useState("");

  useEffect( () => {
    setTime((current) => current = Math.trunc(runtime/60))
    console.log("time",time);
    setGenstr((currnetStr) => currnetStr = genres.join(' / '));
  } , []);

  return (
    <div className='detail'>
      <img src={coverImg} alt={title} />
        <div>{title}</div>
        <div>{year}</div>
        <div>{genreStr}</div>
        <div>{rating} / 10 </div> 
        <div>{language}</div>
        <div>{time}</div> hours <div> {runtime - (time*60) }</div> mins 
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



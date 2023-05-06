import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import "./Detail.Modules.css"

function Detail({coverImg, title, genres, year, rating ,language, runtime, url}) {
  const [time, setTime] = useState(0);
  const [genreStr, setGenstr] = useState("");

  useEffect( () => {
    setTime((current) => current = Math.trunc(runtime/60))
    setGenstr((currnetStr) => currnetStr = genres.join(' / '));
  } , []);

  return (
    //table로 바꾸자
    <div className='detail'>
      <img src={coverImg} alt={title} />
      <div className='title'>{title}</div>
      <div className='year'>{year}</div>
      <div className='row'>
        <div className='genre'>{genreStr}</div>
        <div className='rating'>{rating} / 10 </div> 
      </div>
      <div className='row'>
        <div className='language'>{language}</div>
        <div className='time'>{`${time} hours  ${runtime - (time*60)} mins `}</div> 
      </div>
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



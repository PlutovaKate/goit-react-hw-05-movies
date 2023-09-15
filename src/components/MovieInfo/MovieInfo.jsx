import { React } from 'react';
import PropTypes from 'prop-types';
import css from './MovieInfo.module.css';

const MovieInfo = ({ movie }) => {
  const {
    title,
    overview,
    genres,
    release_date,
    first_air_date,
    poster_path,
    vote_average,
  } = movie;

  const userScore = Math.round(vote_average * 10);

  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <>
      <div className={css.cardFilm}>
        <img src={imgUrl} alt={title} width="200" className={css.img} />
        <div className={css.cardFilmDetails}>
          <h2 className={css.title}>
            {title} ({(first_air_date || release_date).slice(0, 4)})
          </h2>
          <p className={css.score}>User Score: {userScore}%</p>
          {overview && (
            <>
              <h3>Overview</h3>
              <p>{overview}</p>
            </>
          )}
          {genres && (
            <>
              <h4>Genres</h4>
              <p>{genres.map(({ name }) => name).join(', ')}</p>
            </>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
    release_date: PropTypes.string.isRequired,
    first_air_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

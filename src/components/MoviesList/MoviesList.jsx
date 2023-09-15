import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

const MoviesList = ({ trendingMovies, movies }) => {
  const location = useLocation();

  return (
    <div>
      {trendingMovies && (
        <>
          <h2 className={css.trendsTitle}>Trending today</h2>
          <ul>
            {trendingMovies.map(({ title, id }) => (
              <li key={id} className={css.movie}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {movies && (
        <>
          <ul>
            {movies.map(({ title, id }) => (
              <li key={id} className={css.movie}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ),
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ),
};

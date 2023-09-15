import { React, Suspense, useEffect, useState, useRef } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { getMoviesById } from 'components/services/fetchMoviesApi';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMoviesById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  return (
    <div>
      <button type="button" className={css.goBackBtn}>
        <Link
          className={css.goBackLink}
          to={goBack.current}
          state={{ from: location }}
        >
          Go Back
        </Link>
      </button>

      {movie && <MovieInfo movie={movie} />}

      <div>
        <span className={css.addInfo}>Additional information</span>
        <ul>
          <li className={css.details}>
            <Link to={'cast'} state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li className={css.details}>
            <Link to={'reviews'} state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </ul>
        <hr></hr>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

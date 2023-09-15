import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'components/services/fetchMoviesApi';
import css from './Cast.module.css';

const Cast = () => {
  const [castMovie, setCastMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesCast(movieId)
      .then(data => {
        setCastMovie(data.cast);
      })
      .catch(console.log);
  }, [movieId]);

  if (!castMovie) {
    return;
  }

  return (
    <div>
      {castMovie.length > 0 ? (
        <ul className={css.cast}>
          {castMovie.map(({ id, name, actor, profile_path }) => (
            <li key={id} className={css.castCard}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  className={css.imgCast}
                  width="100"
                />
              ) : (
                <div className={css.imgNotFound}>Image not found</div>
              )}
              <div>
                <p>
                  <b>{name}</b>
                </p>
                <p>Actor: {actor}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No casts found</div>
      )}
    </div>
  );
};

export default Cast;

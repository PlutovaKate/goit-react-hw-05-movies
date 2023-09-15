import { React, useEffect, useState } from 'react';
import { getMovies } from 'components/services/fetchMoviesApi.js';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = ({ movies }) => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    getMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      {trendingMovies && (
        <>
          <h2 className={css.trendsTitle}>Trending movies today</h2>
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
                <Link
                  className={css.movieLink}
                  to={`/movies/${id}`}
                  state={{ from: location }}
                >
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

export default Home;

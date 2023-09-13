// import { React, useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import css from './Movies.module.css';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  const movies = ['movie-1', 'movie-2', 'movie-3', 'movie-4', ' movie-5'];

  // useEffect(()={
  // HTTP запрос
  // },[movieId])

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const visibleMovie = movies.filter(movie => movie.includes(movieId));

  console.log(location);
  return (
    <div>
      <form>
        <input onChange={updateQueryString} value={movieId} type="text" />
        <button onClick={() => setSearchParams({ c: 'hello' })}>Search</button>
      </form>
      <div>
        {visibleMovie.map(movie => {
          return (
            <Link key={movie} to={`${movie}`} state={{ from: location }}>
              {movie}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;

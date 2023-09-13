import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId');
  const movies = ['movie-1', 'movie-2', 'movie-3', 'movie-4', ' movie-5'];
  const visibleMovie = movies.filter(movie => movie.includes(movieId));
  // useEffect(()={
  //HTTP запрос
  // },[movieId])

  return (
    <div>
      <h2>Trending today</h2>

      <div>
        {movies.map(movie => {
          return (
            <Link key={movie} to={`${movie}`}>
              {movie}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

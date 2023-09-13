import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // useEffect(()={
  //HTTP запрос
  // },[])

  return (
    <div>
      <h2>Trending today</h2>
      <div>
        {['movie-1', 'movie-2', 'movie-3', 'movie-4', ' movie-5'].map(movie => {
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

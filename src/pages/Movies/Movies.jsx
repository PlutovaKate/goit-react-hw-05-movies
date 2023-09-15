import { React, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'components/services/fetchMoviesApi';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  const [movies, setMovies] = useState(null);
  const [totalMovies, setTotalMovies] = useState(null);
  const [inputSearch, setInputSearch] = useState(movieId);

  useEffect(() => {
    setMovies(null);
    setTotalMovies(null);

    getMoviesBySearch(movieId)
      .then(data => {
        setMovies(data.results);
        setTotalMovies(data.total_results);
      })
      .catch(console.log);
  }, [movieId]);

  const handleInputChange = evt => {
    setInputSearch(evt.currentTarget.value);
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const movieIdValue = evt.target;
    const movieIdNormalized = movieIdValue.movieId.value.toLowerCase().trim();

    if (movieIdNormalized === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdNormalized });
    movieIdValue.reset();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={css.form}>
        <input
          type="text"
          name="movieId"
          className={css.input}
          onChange={handleInputChange}
          value={inputSearch}
        />

        <button type="submit" className={css.submit}>
          Search
        </button>
      </form>

      {movies && <MoviesList movies={movies} />}
      {totalMovies === 0 && (
        <div className={css.noMovies}>Try to find movie</div>
      )}
    </>
  );
};

export default Movies;

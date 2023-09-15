import { getMoviesReview } from 'components/services/fetchMoviesApi';
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviewMovie, setReviewMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesReview(movieId)
      .then(data => {
        setReviewMovie(data.results);
      })
      .catch(console.log);
  }, [movieId]);

  if (!reviewMovie) {
    return;
  }

  return (
    <>
      {reviewMovie.length > 0 ? (
        <ul>
          {reviewMovie.map(({ id, author, content }) => (
            <li key={id}>
              Author: <b>{author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.noReviews}>
          We don't have any reviews for this movie.
        </div>
      )}
    </>
  );
};

export default Reviews;

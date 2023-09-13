import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  // useEffect(()={
  //HTTP запрос
  // },[])

  return (
    <div>
      <button>Go Back</button>
      <img />
      <span>Description: {movieId}</span>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;

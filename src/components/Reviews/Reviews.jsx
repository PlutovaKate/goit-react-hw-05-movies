const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();
  return (
    <div>
      <ul>
        <li>
          <p>Author {movieId}</p>
          <p>Content</p>
        </li>
      </ul>
    </div>
  );
};

export default Reviews;

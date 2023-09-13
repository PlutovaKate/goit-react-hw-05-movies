const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();
  return (
    <div>
      <ul>
        <li>
          <div>Image: {movieId}</div>
          <img></img>
          <div>
            <p>Name</p>
            <p>Character</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cast;

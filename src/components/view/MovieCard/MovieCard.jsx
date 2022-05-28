import { useNavigate, Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  const location = useNavigate();

  return (
    <>
      <ul>
        {movie.map(({ id, title }) => (
          <li key={id}>
            <Link to={location(`/movies/${id}`)}>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

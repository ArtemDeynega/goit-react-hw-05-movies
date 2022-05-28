import { useNavigate, Link } from 'react-router-dom';

export const MovieCard = ({ movies }) => {
  const location = useNavigate();

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
};

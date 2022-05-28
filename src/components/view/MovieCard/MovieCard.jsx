// import { useNavigate } from 'react-router-dom';

export const MovieCard = ({ movies }) => {
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

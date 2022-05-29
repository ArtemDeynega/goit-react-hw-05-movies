import { useNavigate, Link } from 'react-router-dom';
import { LinkMovie } from '.';

export const MovieCard = ({ movies }) => {
  console.log(movies);
  let navigate = useNavigate();
  return (
    <>
      <ul>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <LinkMovie to={`/movies/${id}`}>
              <h3>{title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt="poster film"
              />
            </LinkMovie>
          </li>
        ))}
      </ul>
    </>
  );
};

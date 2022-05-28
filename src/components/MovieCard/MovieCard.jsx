import { useNavigate, Link, Outlet } from 'react-router-dom';

export const MovieCard = ({ movies }) => {
  let navigate = useNavigate();
  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              {/* ТУТ ДОДЕЛАТЬ */}
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

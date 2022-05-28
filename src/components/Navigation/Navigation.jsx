import { NavigationLink } from './Navigation.styled';
export const Navigation = () => {
  return (
    <>
      <nav>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="movies">Movies</NavigationLink>
      </nav>
    </>
  );
};

import { AppBar } from 'view/AppBar';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

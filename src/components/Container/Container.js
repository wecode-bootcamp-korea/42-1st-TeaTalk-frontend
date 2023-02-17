import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

function Container() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Container;

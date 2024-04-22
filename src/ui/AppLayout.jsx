import { Outlet } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Search from './Search';

function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <Search />
        <Outlet />
      </Main>
    </>
  );
}

export default AppLayout;

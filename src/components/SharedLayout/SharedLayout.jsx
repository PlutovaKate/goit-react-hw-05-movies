import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharesLayout.module.css';

const Layout = () => {
  return (
    <div>
      <header>
        <ul className={css.headerNav}>
          <li className={css.headerNavList}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.active}` : `${css.headerLink}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={css.headerNavList}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.active}` : `${css.headerLink}`
              }
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;

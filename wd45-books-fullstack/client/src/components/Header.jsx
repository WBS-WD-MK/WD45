import { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/Auth';
function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <h1>Book App</h1>
      <nav>
        <div>
          <NavLink className="nav-link" to={'/'}>
            Home
          </NavLink>
          <span> | </span>
          <NavLink className="nav-link" to={'/books/new'}>
            Add New Book
          </NavLink>
        </div>
        <>
          {user ? (
            <div className="header-user">
              <p>Hello: {user.username}</p>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div className="header-user">
              <NavLink className="nav-link" to={'/login'}>
                Login
              </NavLink>
              <span> | </span>
              <NavLink className="nav-link" to={'/register'}>
                Register
              </NavLink>
            </div>
          )}
        </>
      </nav>
    </header>
  );
}

export default Header;

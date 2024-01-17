import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/Auth';
import { Navigate } from 'react-router-dom';

function Login() {
  const context = useContext(AuthContext);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    context.login(user);
  };
  if (!context.loading && context.user) {
    return <Navigate to="/" />;
  }

  if (!context.loading && !context.user) {
    return (
      <>
        {context.errors?.message}
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
          <label htmlFor="">Password:</label>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <button>Login</button>
        </form>
      </>
    );
  }
}

export default Login;

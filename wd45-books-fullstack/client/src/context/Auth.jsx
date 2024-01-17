import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosInstance';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const setState = (user, loading, errors) => {
    setUser(user);
    setLoading(loading);
    setErrors(errors);
  };
  useEffect(() => {
    axios
      .get('auth/currentUser')
      .then(res => {
        setState(res.data.user, false, null);
      })
      .catch(error => {
        // we don't care about this error so I'm not storing it
        setState(null, false, null);
      });
  }, []);

  const login = user => {
    setLoading(true);
    axios
      .post('/auth/login', user)
      .then(res => {
        setState(res.data.user, false, null);
        navigate('/');
      })
      .catch(err => {
        setState(null, false, err.response.data);
      });
  };
  const register = user => {
    setLoading(true);
    axios
      .post('/auth/register', user)
      .then(res => {
        setState(res.data.user, false, null);
        navigate('/');
      })
      .catch(err => {
        setState(null, false, err.response.data.errors);
      });
  };

  const logout = () => {
    axios.post('/auth/logout', {}).then(res => {
      navigate('/');
      window.location.reload();
    });
  };

  return (
    <AuthContext.Provider value={{ user, errors, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

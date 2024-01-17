import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

function Protected() {
  const { user, loading } = useContext(AuthContext);

  return <>{!loading && <>{user ? <Outlet /> : <Navigate to="/login" />}</>}</>;
}

export default Protected;

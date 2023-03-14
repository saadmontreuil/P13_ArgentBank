import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute() {
  // const token = localStorage.getItem('token');
  const isLogged = useSelector((state) => state.auth.isLogged);

  return isLogged ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;

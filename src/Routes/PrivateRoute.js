import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const PrivateRoute = ({ path, element }) => {
  const { isAuthenticated } = useAuth(); 

  return (
    <Route
      path={path}
      element={isAuthenticated ? element : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;

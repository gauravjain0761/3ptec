import PropTypes from 'prop-types';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const isAuthenticated = 'ss'; // Replace with your authentication logic
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    // Store the requested location for redirection after login
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to="/login" />;
  }

  // If a requested location exists and the current location is different, redirect
  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null); // Reset requested location after redirection
    return <Navigate to={requestedLocation} />;
  }

  // Render the child components (passed routes) if the user is authenticated
  return <>{children}</>;
}

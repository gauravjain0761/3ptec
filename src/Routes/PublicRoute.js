// PublicRoute.js
import { Route, redirect  } from 'react-router-dom';

function PublicRoute({ component: Component, restricted, ...rest }) {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
            redirect('/dashboard')
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;

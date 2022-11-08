import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from 'App';

function ProtectedRoute({ children, accessLevel }) {
  const { auth } = useContext(AuthContext);

  if (accessLevel === 'auth' && !auth) {
    return <Navigate to="/login" />;
  }
  if (accessLevel === 'no-auth' && auth) {
    return <Navigate to="/chats" />;
  }
  return children;
}

export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../App";

const ProtectedRoute = ({ children, accessLevel }) => {
  const { auth } = useContext(AuthContext);

  if (accessLevel === 'auth' && !auth) {
    return <Navigate to="/login" />;
  }
  if (accessLevel === 'no-auth' && auth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;

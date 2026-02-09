import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  if (auth.loading) return null;
  return auth.isAuthenticated ? children : <Navigate to="/login" replace />;
};
export default ProtectedRoute;
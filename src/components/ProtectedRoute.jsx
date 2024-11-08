import { Navigate } from 'react-router-dom';
// if youre not logged, it returns you to /login

function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

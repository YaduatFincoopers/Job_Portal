import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

 function UserRoute() {
  const { isAuthenticated, user } = useSelector(s => s.auth);

  if (!isAuthenticated || user.role !== 'user') {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
export default UserRoute;

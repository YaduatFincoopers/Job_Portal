import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

 function AdminRoute() {
  const { isAuthenticated, user } = useSelector(s => s.auth);

  if (!isAuthenticated || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
export default AdminRoute;
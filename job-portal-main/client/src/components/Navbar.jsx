


import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 py-3 bg-white shadow-sm">
      <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold w-30 h-8  rounded-md flex items-center justify-center text-sm ">JobPortal</h1>

      <div className="flex gap-4">
        {!isAuthenticated && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {isAuthenticated && user.role === 'user' && (
          <>
            <Link to="/user/dashboard">Dashboard</Link>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        )}

        {isAuthenticated && user.role === 'admin' && (
          <>
            <Link to="/admin/dashboard">Admin Panel</Link>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

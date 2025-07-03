import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { URLS } from '../services/apiurls';
import { webService } from '../services/apiurls';
import { loginSuccess } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
export default function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await webService.post(URLS.LOGIN, { email, password });
    
    if (response.status === 200) {
      const { email, role, token } = response.data;

      // Store in localStorage if needed
      localStorage.setItem('token', token);
      localStorage.setItem('loggedInEmail', email);
      localStorage.setItem('role', role);

      // Dispatch to Redux
      dispatch(loginSuccess({ email, role, token }));

      // Navigate based on role
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    }
  } catch (error) {
    setError('Invalid username or password');
  }
};



  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-[80px]">
   <div className="bg-white w-full sm:w-[450px] h-[600px] p-8 flex flex-col gap-2 rounded-2xl shadow-2xl">
  <div className="flex justify-center items-center">
    <div className="bg-blue-800 w-[50px] h-[50px] rounded-2xl"></div>
  </div>

  <h2 className="text-2xl font-bold text-center mt-2 mb-4">Login</h2>

  <label htmlFor="email" className="font-medium text-sm">Email Address</label>
  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full p-2 border border-gray-200 rounded mb-2 text-sm"
  />
  <div className="relative w-full">
  <label htmlFor="password" className="font-medium text-sm">Password</label>
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    className="w-full p-2 border border-gray-200 rounded mb-2 text-sm"
  />
  <div
        className="absolute top-[35px] right-3 cursor-pointer text-gray-600"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </div></div>
  <div className="w-full text-left mb-2">
  <button className="text-blue-800 text-sm">Forgot password?</button>
  </div>

  {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
  {message && <p className="text-green-500 text-sm mb-2">{message}</p>}

  <button
    onClick={handleLogin}
    className="w-full bg-blue-500 text-white py-2 rounded mt-2"
  >
    Login
  </button>

  <p className="text-base mt-4 text-center text-gray-500">
    Don't have an account?{' '}
    <span
      onClick={() => navigate('/Register')}
      className="text-blue-600 cursor-pointer"
    >
      Sign Up
    </span>
  </p>
</div>
</div>


    
    
   

  );
}

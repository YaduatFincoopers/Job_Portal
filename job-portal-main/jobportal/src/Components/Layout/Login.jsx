import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import women from "/src/assets/images/women.png";
import thunder from "/src/assets/images/thunderimg (1).png";
import image from "/src/assets/images/logon.jpg.png";
import { ToastContainer, toast } from "react-toastify";
import { Cookies } from "react-cookie";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Email:", email);
    console.log("Password:", password);
  }, [email, password]);

  const data = async (e) => {
    e.preventDefault();

    if (!email) return toast.error("Please enter email");
    if (!password) return toast.error("Please enter a password");

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(email))
      return toast.error("Please enter a valid email");

    try {
      const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const result = await response.json();

        cookies.set("user", JSON.stringify(result.data), { path: "/" });
        cookies.set("email", email, { path: "/" });
        cookies.set("auth", result.data.auth, { path: "/" });
        cookies.set("_id", result.data._id, { path: "/" });
        cookies.set("token", result.data.token, { path: "/" });

        setToken(result.data.token);
        toast.success(result.message);

        setTimeout(() => {
          navigate(result.data.auth === "admin" ? "/AdminDashboard" : "/dashboard");
        }, 1500);
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Right Side - Image and Text */}
      <div className="hidden md:flex md:w-[50%] items-center justify-center bg-blue-900 p-4">
        <div className="bg-white/10 rounded-2xl p-5 w-[90%] max-w-md text-white relative shadow-lg">
          {/* Thunder Icon */}
          <div className="absolute -left-5 top-30">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <img src={thunder} alt="Thunder" className="w-8 h-8" />
            </div>
          </div>

          {/* Girl Image */}
          <img
            src={women}
            alt="Illustration"
            className="big-image"
          />

          {/* Text */}
          <p className="text-left text-2xl font-bold leading-snug">
            Very good<br />works are<br />waiting for<br />you Login<br />Now!!!
          </p>
        </div>
      </div>

      {/* Left Side - Login Form */}
      <div className="w-full md:w-[50%] flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">
          <img src={image} alt="Logo" className="h-20 mx-auto mb-4" />

          <h2 className="text-center text-2xl font-bold uppercase mb-2">Login</h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            How to i get started lorem ipsum dolor at?
          </p>

          <form onSubmit={data} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none"
            />

            <div className="text-right text-sm">
              <Link to="/forgetPass" className="text-blue-600 hover:underline">
                Forgotten Password ?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-400 to-indigo-700 text-white py-3 rounded-lg font-semibold shadow-md"
            >
              Login Now
            </button>

            <div className="text-center mt-4 text-sm">
              Don't Have An Account?{" "}
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-blue-600 hover:underline"
              >
                Create Account
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href="https://accounts.google.com/"
                className="flex items-center justify-center gap-3 w-full py-3 rounded-lg border border-gray-300 bg-green-600 text-white font-bold"
              >
                <FaGoogle size={20} /> Login with Google
              </a>
              <a
                href="https://www.facebook.com/"
                className="flex items-center justify-center gap-3 w-full py-3 rounded-lg border border-gray-300 bg-blue-900 text-white font-bold"
              >
                <FaFacebookF size={20} /> Login with Facebook
              </a>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

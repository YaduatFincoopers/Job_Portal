import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp.length === 6) {
      navigate("/CreateNewPassword");
    } else {
      alert("Enter valid 6-digit OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl flex items-center justify-center font-bold text-sm">
            JP
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-900">Verify OTP</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          We’ve sent a 6-digit code to your email.
        </p>

        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
          className="w-full text-center text-xl tracking-widest py-3 px-4 border rounded-md focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Enter OTP"
        />

        <button
          onClick={handleVerify}
          className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:opacity-90 transition"
        >
          Verify OTP
        </button>

        <p className="text-center text-sm text-gray-600 mt-3">
          Didn’t receive?{" "}
          <button className="text-blue-600 font-medium hover:underline">
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;

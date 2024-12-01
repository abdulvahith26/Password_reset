import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back :)</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember Me</span>
            </label>
        
              <Link to="/forgotpassword"
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>
          <button className="bg-blue-500 text-white w-full py-2 px-4 rounded">
            Login Now
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
      </div>
    );
};

export default HomePage;
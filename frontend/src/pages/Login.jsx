import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Email validation
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   setError('Please enter a valid email address.');
    //   return;
    // }

    axios.post('http://localhost:5000/auth/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/admin/dashboard');
        } else {
          console.error('Invalid response structure:', result);
          setError('USername or Password is incorrect.');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 bg-light-blue-50">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600"><strong>Email</strong></label>
            <input
              type="text"
              placeholder="Enter email"
              autoComplete="on"
              name="email"
              className="border rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="on"
              name="password"
              className="border rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white w-full rounded-md py-2">
            Login
          </button>
        </form>

        <p className="mt-4">Don't have an account?</p>
        <Link to="/register" className="border w-full bg-light-blue-100 rounded-md text-blue-500 text-center block py-2">
          Signup
        </Link>
        <br />
        <Link to="/forgot-password" className="text-blue-500">Forgot Password</Link>
      </div>
    </div>
  );
}

export default Login;

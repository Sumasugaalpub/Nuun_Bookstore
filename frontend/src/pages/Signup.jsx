import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate empty fields
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // // Validate email format
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   setError("Invalid email format.");
    //   return;
    // }

    try {
      // Make a POST request to register endpoint
      const response = await axios.post('http://localhost:5000/auth/register', { name, email, password });
      console.log('Registration successful:', response.data);
      navigate('/login'); // Redirect to home page or login page after successful registration
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      // Handle error, e.g., display error message to the user
      setError(error.response.data.error || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 ">
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600"><strong>Name</strong></label>
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="on"
              name="name"
              className="border rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600"><strong>Email</strong></label>
            <input
              type="text"
              placeholder="Enter email"
              autoComplete="on"
              name="email"
              className="border rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              className="border rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button type="submit" className="bg-blue-500 text-white w-full rounded-md py-2">
            Register
          </button>
        </form>

        <p className="mt-4">Already have an account?</p>
        <Link to="/login" className="border w-full bg-gray-300 rounded-md text-blue-500 text-center block py-2">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;

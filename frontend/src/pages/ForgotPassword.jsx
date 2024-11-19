import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/auth/forgot-password', { email })
      .then((res) => {
        if (res.data.Status === 'Success') {
          navigate('/login');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-3 rounded-md w-1/4 shadow-md">
        <h4>Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="border rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white w-full rounded-md py-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

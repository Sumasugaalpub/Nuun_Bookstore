import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ResetPassword() {
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/auth/reset-password/${id}`, { password })
      .then((res) => {
        if (res.data.Status === 'Success') {
          navigate('/login');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-3 rounded-md w-1/4 shadow-md">
        <h4 className="text-center">Reset Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              <strong>New Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="border rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full rounded-md py-2"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;

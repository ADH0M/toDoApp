import React, { useState } from 'react';
import MainNav from '../navbar/MainNav';
import { Outlet } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false); // Maintain error state object

  const validation = () => {
    let errors = {}; // Use plural 'errors' to handle multiple potential errors
    if (!email) {
      errors.email = 'Email is required';
    }

    if (!pass) {
      errors.pass = 'Password is required';
    }

    return errors;
  };

  const handleFields = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validation(); // Validate before updating error state
    if (Object.keys(errors).length >= 1) {
      setError(errors); // Set errors object for display
      return; // Prevent further processing if errors exist
    }
    setError(false)
    // Handle successful login (implement your login logic here)
    console.log('Login successful!'); // Example placeholder for success message
  };

  return (
    <div className="container flex  mx-auto bg-gray-400 relative  ">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto h-fit absolute top-[20%] left-[50%] bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="john@ga.co"
            value={email}
            onChange={(e) => handleFields(e, setEmail)}
          />
          {error.email && (
            <span className="text-red-500 text-sm">{error.email}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="pass" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="pass"
            name="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="..."
            value={pass}
            onChange={(e) => handleFields(e, setPass)}
          />
          {error.pass && (
            <span className="text-red-500 text-sm">{error.pass}</span>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
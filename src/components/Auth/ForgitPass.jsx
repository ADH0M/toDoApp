import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';

const ForgitPass = () => {
  const inputEmail = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputEmail.current.value;
    alert(value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Reset Password</h1>
        <p className="text-center mb-6">You will receive instructions for resetting your password.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700">Your Email</label>
            <input type="email" id="email" ref={inputEmail} className="border rounded-md p-2" />
          </div>
          <Outlet/>
          <button type="submit" className="bg-blue-500 text-white relative left-[50%] px-4 py-2 rounded-md hover:bg-blue-600">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ForgitPass;
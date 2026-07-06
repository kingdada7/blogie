import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {};

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md:m-6 border border-cyan-600/30 shadow-xl shadow-cyan/15 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl text-white font-bold ">
              <span className="text-cyan-600">Admin</span>Login
            </h1>
            <p className="font-light text-white">
              Enter your credentials to access the admin panel
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-6 mb-6 w-full sm:max-w-md text-gray-600"
          >
            <div className="flex flex-col">
              <label className="text-white">Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="Your email address"
                className="border-b-2 border-gray-300 p-2 outline-none mb-6 text-white"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                placeholder="Enter your password"
                className="border-b-2 border-gray-300 p-2 outline-none mb-6 text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-medium bg-cyan-600 text-white rounded cursor-pointer hover:bg-cyan-600/90 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

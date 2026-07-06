import React from "react";

const Login = () => {
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
          <form onSubmit={handleSubmit}></form>
        </div>
      </div>
    </div>
  );
};

export default Login;

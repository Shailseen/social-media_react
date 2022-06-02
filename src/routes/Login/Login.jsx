import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../feature/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const guestClickHandler = () => {
    dispatch(
      loginUser({ username: "adarshbalika", password: "adarshBalika123" })
    );
  };
  return (
    <div className="flex flex-col w-3/4 p-8 rounded-sm shadow-md mx-auto my-16">
      <div className="flex">
        <span className="w-2/4 text-center text-xl bg-primary-color text-white p-1 rounded-sm">
          Login
        </span>
        <span className="w-2/4 text-center text-xl rounded-sm">Signup</span>
      </div>
      <section className="flex flex-col">
        <div className="flex flex-col mt-8 mb-2">
          <label className="text-gray-500" htmlFor="email">
            Email
          </label>
          <input
            className="p-2 border rounded-sm focus:outline-none"
            type="email"
            placeholder="Enter email here..."
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="text-gray-500" htmlFor="password">
            Password
          </label>
          <input
            className="p-2 border rounded-sm focus:outline-none"
            type="password"
            placeholder="Enter password here..."
          />
        </div>
        <button className="bg-primary-color text-lg text-white p-2 mb-6 rounded-sm">
          LogIn
        </button>
        <button
          onClick={() => guestClickHandler()}
          className="bg-primary-color text-white p-2 text-lg rounded-sm"
        >
          Guest login
        </button>
      </section>
    </div>
  );
};

export default Login;

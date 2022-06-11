import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, useAuth } from "../../feature/authSlice";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const guestClickHandler = () => {
    dispatch(loginUser({ username: "shailseen", password: "shail1234" }));
  };

  useEffect(() => {
    document.title = "moments | Login";
    if (user) navigate("/home");
  }, [user]);

  return (
    <div className="flex flex-col p-8 rounded-sm shadow-md m-auto bg-white">
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

        <button className="bg-primary-color text-lg text-white p-2 mb-6 rounded-sm hover:opacity-90">
          LogIn
        </button>

        <button
          onClick={() => guestClickHandler()}
          className="bg-primary-color text-white p-2 text-lg rounded-sm hover:opacity-90"
        >
          Guest login
        </button>
      </section>
    </div>
  );
};

export default Login;

import React from "react";
import { LockClosedIcon, UserIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", credentials);
      if (!res) return;
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/home");
    } catch (err) {
      dispatch({ type: "LOGIN_FALIURE", payload: err.response.data });
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2 mb-4 ">
          <UserIcon className="flex w-5 h-5 text-gray-500" />

          <input
            className="flex w-52 h-8 border outline-none font-serif px-2 shadow-inner rounded-lg"
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
          />
        </div>

        {/* <div className="flex justify-center items-center gap-2 ">
          <LockClosedIcon className="flex w-5 h-5 text-gray-500" />

          <input
            className="flex w-52 h-8 border outline-none font-serif px-2 shadow-inner rounded-lg"
            type="text"
            placeholder="email"
            onChange={handleChange}
          />
        </div> */}
        <div className="flex justify-center items-center gap-2 ">
          <LockClosedIcon className="flex w-5 h-5 text-gray-500" />

          <input
            className="flex w-52 h-8 border outline-none font-serif px-2 shadow-inner rounded-lg"
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <button
          className="flex text-lg font-bold text-white bg-cyan-600 justify-center items-center px-2 py-1 w-20 rounded-md my-5 cursor-pointer"
          onClick={handleClick}
          disabled={loading}
        >
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>

      <div className="flex w-96 h-96 justify-center items-center">
        <img src="/login.svg" alt="" />
      </div>
    </div>
  );
}

export default Login;

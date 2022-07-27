import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Task.css";
import Text from "./text/Text";
import Moment from "moment";

function Task({ theme }) {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const newDate = Moment().format("llll");
  console.log(newDate);

  return (
    <div>
      <div className="flex py-5 justify-center">
        <div
          className="flex text-5xl font-bold font-serif"
          style={{ color: theme ? "#fff" : "#0e0c0c" }}
        >
          My Task
        </div>

        <div className="flex  w-10 h-8 translate-x-72 gap-0.5">
          <input
            className="flex font-mono pl-3 outline-none text-black justify-center shadow-md rounded-l-md "
            type="text"
            placeholder="Search..."
          />
          <button className="flex text-white px-2 justify-center items-center font-bold bg-cyan-500 shadow-md rounded-r-md">
            Search
          </button>
          {user ? (
            user.username
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex bg-cyan-500 text-white font-bold font-serif text-xl px-2 py-1 justify-center items-center rounded-xl translate-x-2"
            >
              Logout
            </button>
          )}
        </div>
      </div>
      <Text />
    </div>
  );
}

export default Task;

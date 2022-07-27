import React from "react";
import "./Home.css";

function Home({ theme, setTheme }) {
  return (
    <div
      className="flex justify-center items-center mt-4 ml-48"
      style={{
        backgroundColor: theme ? "#0e0c0c" : "#fff",
        color: theme ? "#fff" : "#0e0c0c",
      }}
    >
      <div className="switch-btn">
        <input
          type="checkbox"
          id="switch"
          className="switch"
          onClick={() => setTheme(!theme)}
        />
        <label htmlFor="switch" className="toggle"></label>
      </div>
    </div>
  );
}

export default Home;

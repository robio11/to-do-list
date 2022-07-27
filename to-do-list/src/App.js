import { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/Task";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import SignIn from "./components/signin/SignIn";
import Home from "./components/home/Home";
// import login from './login.svg';

function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      document.body.style.backgroundColor = "#0e0c0c";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="app">
        <Home theme={theme} setTheme={setTheme} />
        <Routes>
          <Route
            path="/home"
            element={<Task theme={theme} setTheme={setTheme} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

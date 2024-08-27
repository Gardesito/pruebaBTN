import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="ejemplo">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/2"> About</Link>
        <Link to="/23"> Cuchau</Link>
      </nav>

      <h1>Hola</h1>
    </div>
  );
}

export default App;

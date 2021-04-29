import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showlinks, setShowlinks] = useState(false);
  return (
    <div className="nav-bar">
      <div className="nav-header">
        <span className="header-container">
          <i className="fa fa-train"></i>
          <Link to="/">Train ticket app</Link>
        </span>
        <button className="nav-toggle" onClick={() => setShowlinks(!showlinks)}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
      {showlinks ? <Sidebar /> : null}
    </div>
  );
};

export default Navbar;

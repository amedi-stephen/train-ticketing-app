import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showlinks, setShowlinks] = useState(false);
  return (
    <div className="nav-bar">
      <div className="nav-header">
        <span className="header-container">
          <i className="fa fa-train"></i>
          <a>Train ticket app</a>
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

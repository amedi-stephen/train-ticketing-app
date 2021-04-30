import React from "react";
import { Link } from "react-router-dom";
import "../Css/Sidebar.css";
const Sidebar = () => {
  return (
    <div className="nav-links show-nav-links">
      <ul className="links">
        <li>
          <Link to="">book a train</Link>
        </li>
        <li>
          <Link to="/stations">stations</Link>
        </li>
        <li>
          <Link to="/stories">stories</Link>
        </li>
        <li>
          <Link href="/contacts">contacts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

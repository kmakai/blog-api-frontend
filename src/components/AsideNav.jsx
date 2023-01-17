import React from "react";
import { Link } from "react-router-dom";

function AsideNav() {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </aside>
  );
}

export default AsideNav;

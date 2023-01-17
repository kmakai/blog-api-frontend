import React, { useContext } from "react";
import BlogContext from "../context/blog/BlogContext";
import { Link } from "react-router-dom";

function Header() {
  const { user } = useContext(BlogContext);
  return (
    <header className="header">
      <h1>BlogDev</h1>
      <div className="user-info">
        {user !== null ? (
          <p>{user.email}</p>
        ) : (
          <button>
            <Link to="/login"> login </Link>
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;

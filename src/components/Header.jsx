import React, { useContext } from "react";
import BlogContext from "../context/blog/BlogContext";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../context/blog/BlogActions";

function Header() {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(BlogContext);

  const onlogout = async () => {
    await logOut();
    dispatch({
      type: "LOG_OUT",
      payload: null,
    });
    navigate("/");
  };
  return (
    <header className="header">
      <h1>BlogDEV</h1>
      <div className="user-info">
        {user !== null ? (
          <>
            <button onClick={onlogout}>Logout</button>
            <p>{user.email}</p>
          </>
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

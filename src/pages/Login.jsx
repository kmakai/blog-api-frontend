import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../context/blog/BlogActions";
import BlogContext from "../context/blog/BlogContext";

function Login() {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formdata;

  const { dispatch } = useContext(BlogContext);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = await login(formdata);
    dispatch({
      type: "SIGN_IN_USER",
      payload: user,
    });

    navigate("/");
  };
  return (
    <div className="login-page">
      <h2>LOGIN TO THE BLOG</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            id="email"
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>

        <button> Login </button>
      </form>
    </div>
  );
}

export default Login;

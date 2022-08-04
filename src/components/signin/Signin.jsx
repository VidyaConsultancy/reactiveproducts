import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouterNavigate } from "../../hooks/useRouterNavigate";
import { signin } from "../../services/auth";
import { loginStart, loginSuccess } from "../../store/auth.slice";

export const Signin = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const navigate = useRouterNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await signin(user);
      dispatch(loginSuccess(res))
      localStorage.setItem("accessToken", res.accessToken);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form action="" className="signin column-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            placeholder="A password"
            onChange={handleChange}
            value={user.password}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" disabled={authState.loading}>
            Signin
          </button>
        </div>
      </form>
    </div>
  );
};

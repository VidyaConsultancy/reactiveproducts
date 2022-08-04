import React, { useState } from "react";
import { useRouterNavigate } from "../../hooks/useRouterNavigate";
import { signup } from "../../services/auth";

export const Signup = () => {
  const navigate = useRouterNavigate();
  const [user, setUser] = useState({ email: '', password: ''});

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user);
      navigate('/signin')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <form action="" className="signup column-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" name="email" placeholder="Your email" onChange={handleChange} value={user.email} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" name="password" placeholder="A password" onChange={handleChange} value={user.password} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Signup</button>
        </div>
      </form>
    </div>
  );
};

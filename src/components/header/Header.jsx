import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../../store/auth.slice";
import { useRouterNavigate } from "../../hooks/useRouterNavigate";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useRouterNavigate();
  const authState = useSelector((state) => state.auth);
  const { accessToken } = authState;

  const logout = () => {
    dispatch(logoutSuccess());
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              {accessToken ? (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/products">
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </React.Fragment>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signin">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

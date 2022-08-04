import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductList } from "../product-list/ProductList";
import { ProductAdd } from "../product-add/ProductAdd";
import { ProductEdit } from "../product-edit/ProductEdit";
import { Signin } from "../signin/Signin";
import { Signup } from "../signup/Signup";
import { Header } from "../header/Header";

// header, footer, main, aside, video, audio, section, article, nav

export const Main = () => {
  const authState = useSelector((state) => state.auth);
  const { accessToken } = authState;
  // const mainClassNames = ["main", "main-content"];
  // if(state === 'sme') {
  //   mainClassNames.push('sm');
  // }
  const mainStyle = {
    backgroundColor: "#f8f8f8",
  };

  const PageNotFound = (
    <div className="404-page">
      <h3>404 <small>Page not found</small></h3>
    </div>
  )

  return (
    <div className="content">
      <Header />
      {/* <main className={mainClassNames.join(" ")}> */}
      <main className="main" style={mainStyle}>
        <Routes>
          <Route path="" exact element={<h1>Home page</h1>} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signin" exact element={<Signin />} />
          {accessToken ? (
            <>
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/add" element={<ProductAdd />} />
              <Route path="/products/edit/:id" element={<ProductEdit />} />
            </>
          ) : null}
          <Route path="*" exact element={PageNotFound} />
        </Routes>
      </main>
      <footer>&copy; All rights reserved</footer>
    </div>
  );
};

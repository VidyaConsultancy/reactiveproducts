import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { ProductList } from "../product-list/ProductList";
import { ProductAdd } from "../product-add/ProductAdd";
import { ProductEdit } from "../product-edit/ProductEdit";

export const Main = () => {
  return (
    <div className="container">
      <header>
        <ul>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="" exact element={<h1>Home page</h1>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/add" element={<ProductAdd />} />
        <Route path="/products/edit/:id" element={<ProductEdit />} />
      </Routes>
      <footer>
        &copy; All rights reserved
      </footer>
    </div>
  );
};

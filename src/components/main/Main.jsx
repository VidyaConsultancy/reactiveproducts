import { Routes, Route, Link } from "react-router-dom";
import { ProductList } from "../product-list/ProductList"
import { ProductAdd } from "../product-add/ProductAdd";
import { ProductEdit } from "../product-edit/ProductEdit";

export const Main = () => {
  return (
    <div className="container">
      <Link to="/products">Products</Link>
      <Routes>
        <Route path="/" exact element={<h1>Home page</h1>} />
        <Route path="/products" exact element={<ProductList />} />
        <Route path="/products/add" element={<ProductAdd />} />
        <Route path="/products/edit/:id" element={<ProductEdit />} />
      </Routes>
    </div>
  );
}

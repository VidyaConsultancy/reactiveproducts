import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { modifyProduct, getProductById } from "../../services/products";

export const ProductEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;

  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
  });

  const handleChange = (e) => {
    const updatedProduct = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(updatedProduct);
  };

  const handleProductEdit = async (e) => {
    e.preventDefault();
    const newProduct = { ...product };
    await modifyProduct(newProduct);
    setProduct({ id: "", name: "", price: "" });
    navigate("/products");
  };

  useEffect(() => {
    getProductById(productId)
      .then(data => setProduct(data))
      .catch(error => console.log(error))
  }, [productId])

  return (
    <form action="" className="column-form" onSubmit={handleProductEdit}>
      <div className="form-group">
        <label htmlFor="name">Product name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          value={product.name}
          placeholder="Enter product name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Product Price</label>
        <input
          type="text"
          className="form-control"
          name="price"
          id="price"
          value={product.price}
          placeholder="Enter product price"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

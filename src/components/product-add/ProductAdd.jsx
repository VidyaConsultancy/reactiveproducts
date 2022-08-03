import { useState } from "react";
import { createProduct } from "../../services/products";

export const ProductAdd = () => {
  const [product, setProduct] = useState({ name: "", price: "" });

  const handleChange = (e) => {
    const updatedProduct = { ...product, [e.target.id]: e.target.value };
    setProduct(updatedProduct);
  };

  const handleProductAdd = async (e) => {
    e.preventDefault();
    const newProduct = { ...product };
    try {
      await createProduct(newProduct);
      setProduct({ name: "", price: "" });
    } catch (error) {
      console.error(`Error!`, error);
    }
  };
  return (
    <form action="" className="column-form" onSubmit={handleProductAdd}>
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
}

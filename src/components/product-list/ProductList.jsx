import { useState } from "react";
import { ProductItem } from "../product-item/ProductItem";
import "./ProductList.css";

export const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Acer", price: 99.99 },
    { id: 2, name: "MacBook", price: 199.99 },
    { id: 3, name: "HP Pavilion", price: 149.99 },
    { id: 4, name: "MS SurfaceProd", price: 249.99 },
  ]);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showEditProductForm, setShowEditProductForm] = useState(false);
  const [product, setProduct] = useState({ name: "", price: "" });
  const [updateProduct, setUpdateProduct] = useState({ id: '', name: "", price: "" });

  const handleChange = (e) => {
    const updatedProduct = { ...product, [e.target.id]: e.target.value };
    setProduct(updatedProduct);
  };

  const handleProductAdd = (e) => {
    e.preventDefault();
    const newProduct = { ...product, id: products.length + 1 };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setProduct({ name: "", price: "" });
  };

  const onDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  }

  const onEdit = (id) => {
    const editProduct = products.find((product) => product.id === id);
    setUpdateProduct(editProduct);
    setShowEditProductForm(true);
  }

  const handleUChange = (e) => {
    const updatedProduct = { ...updateProduct, [e.target.name]: e.target.value };
    setUpdateProduct(updatedProduct);
  }

  const handleProductEdit = (e) => {
    e.preventDefault();
    const newProduct = { ...updateProduct };
    const productIndex = products.findIndex(product => product.id === newProduct.id);
    products.splice(productIndex, 1, newProduct);
    setProducts(products);
    setUpdateProduct({ id: '', name: "", price: "" });
    setShowEditProductForm(false);
  };

  // if(loading) {
  //   return ()
  // }

  return (
    <div className="products-page">
      <div>
        <button
          onClick={() => setShowAddProductForm(!showAddProductForm)}
          className="btn btn-warn"
        >
          Toggle Add Product Form
        </button>
      </div>
      <ul className="products d-flex flex-column gap-3">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            handleDelete={onDelete}
            handleEdit={onEdit}
          />
        ))}
      </ul>
      {showAddProductForm ? (
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
      ) : null}
      {showEditProductForm ? (
        <form action="" className="column-form" onSubmit={handleProductEdit}>
          <div className="form-group">
            <label htmlFor="uname">Product name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="uname"
              value={updateProduct.name}
              placeholder="Enter product name"
              onChange={handleUChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="uprice">Product Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              id="uprice"
              value={updateProduct.price}
              placeholder="Enter product price"
              onChange={handleUChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

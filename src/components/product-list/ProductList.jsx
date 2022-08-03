import { useEffect, useState } from "react";
// import axios from 'axios';
import { ProductItem } from "../product-item/ProductItem";
import {
  getAllProducts,
  createProduct,
  deleteProduct,
  modifyProduct,
  getProductById,
} from "../../services/products";
import "./ProductList.css";

// const axiosObj = axios.create({
//   baseURL: "http://localhost:3000",
//   headers: {
//     authoriazation: "Bearer token",
//   },
// });

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showEditProductForm, setShowEditProductForm] = useState(false);
  const [product, setProduct] = useState({ name: "", price: "" });
  const [updateProduct, setUpdateProduct] = useState({
    id: "",
    name: "",
    price: "",
  });
  const [error, setError] = useState(null);

  const fetchAllProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response);
    } catch (error) {
      setError(error);
      setTimeout(() => setError(null), 2000)
    }
  };

  useEffect(() => {
    // fetch("http://localhost:3000/products", {
    //   method: "GET",
    // })// Response object
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data))
    //   .catch((error) => console.error(error));
    // axiosObj
    //   .get("/products", { headers: {
    //     "x-api-key": 'some secure token'
    //   }})
    //   .then((response) => {
    //     console.log(response);
    //     setProducts(response.data);
    //   })
    //   .catch((error) => console.error(error));

    fetchAllProducts();
  }, []);

  const handleChange = (e) => {
    const updatedProduct = { ...product, [e.target.id]: e.target.value };
    setProduct(updatedProduct);
  };

  const handleProductAdd = async (e) => {
    e.preventDefault();
    const newProduct = { ...product };
    try {
      await createProduct(newProduct);
      await fetchAllProducts();
      // const updatedProducts = [...products, response];
      // setProducts(updatedProducts);
      setProduct({ name: "", price: "" });
    } catch (error) {
      console.error(`Error!`, error);
    }
  };

  const onDelete = async (id) => {
    await deleteProduct(id);
    await fetchAllProducts();
    // const updatedProducts = products.filter((product) => product.id !== id);
    // setProducts(updatedProducts);
  };

  const onEdit = async (id) => {
    const editProduct = await getProductById(id);
    // const editProduct = products.find((product) => product.id === id);
    setUpdateProduct(editProduct);
    setShowEditProductForm(true);
  };

  const handleUChange = (e) => {
    const updatedProduct = {
      ...updateProduct,
      [e.target.name]: e.target.value,
    };
    setUpdateProduct(updatedProduct);
  };

  const handleProductEdit = async (e) => {
    e.preventDefault();
    const newProduct = { ...updateProduct };
    await modifyProduct(newProduct);
    await fetchAllProducts();
    // const productIndex = products.findIndex(
    //   (product) => product.id === newProduct.id
    // );
    // products.splice(productIndex, 1, newProduct);
    // setProducts(products);
    setUpdateProduct({ id: "", name: "", price: "" });
    setShowEditProductForm(false);
  };

  // if(loading) {
  //   return ()
  // }

  return (
    <div className="products-page">
      {error ? <div className="alert alert-danger">
        <p>{error.message}</p>
      </div> : null}
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

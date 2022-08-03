import { useEffect, useState } from "react";
// import axios from 'axios';
import { ProductItem } from "../product-item/ProductItem";
import {
  getAllProducts,
  deleteProduct,
} from "../../services/products";
import "./ProductList.css";
import { Link } from "react-router-dom";

// const axiosObj = axios.create({
//   baseURL: "http://localhost:3000",
//   headers: {
//     authoriazation: "Bearer token",
//   },
// });

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchAllProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response);
    } catch (error) {
      setErrorMsg(error);
      setTimeout(() => setErrorMsg(null), 2000);
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

  const onDelete = async (id) => {
    await deleteProduct(id);
    await fetchAllProducts();
    // const updatedProducts = products.filter((product) => product.id !== id);
    // setProducts(updatedProducts);
  };

  // if(loading) {
  //   return ()
  // }

  return (
    <div className="products-page">
      {errorMsg ? (
        <div className="alert alert-danger">
          <p>{errorMsg.message}</p>
        </div>
      ) : null}
      <div>
        <Link
          to="/products/add"
          className="btn btn-warn"
        >
          Add Product
        </Link>
      </div>
      <ul className="products d-flex flex-column gap-3">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            handleDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

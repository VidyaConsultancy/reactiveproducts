import React from 'react';
import { Link } from "react-router-dom";

export const ProductItem = ({ product, handleDelete }) => (
  <li className="product d-flex align-center gap-3">
    <p className='flex-grow-1'>
      {product.name} | <small>${product.price}</small>
    </p>
    <Link className="btn btn-info btn-sm" to={`/products/edit/${product.id}`}>
      Edit
    </Link>
    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>
      Delete
    </button>
  </li>
);

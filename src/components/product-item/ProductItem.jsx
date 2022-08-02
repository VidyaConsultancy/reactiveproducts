export const ProductItem = ({ product, handleDelete, handleEdit }) => (
  <li className="product d-flex align-center gap-3">
    <p>
      {product.name} | <small>${product.price}</small>
    </p>
    <button className="btn btn-info btn-sm" onClick={() => handleEdit(product.id)}>
      Edit
    </button>
    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>
      Delete
    </button>
  </li>
);

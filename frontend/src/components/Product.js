import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="card my-2 p-2 rounded">
      <a href={`products/${product._id}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </a>
      <div className="card-body">
        <a href={`products/${product._id}`}>
          <div className="card-title my-2  fw-bold">{product.name} </div>
        </a>
        <div className="card-text my-2">
          {product.rating} from {product.numReviews} reviews
        </div>
        <h3 className="card-text">${product.price}</h3>
      </div>
    </div>
  );
};

export default Product;

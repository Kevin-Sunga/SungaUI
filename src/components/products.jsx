import React from "react";
import "../styles.css";
const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: "₱8999",
    image: "/pictures/air270.jpg",
  },
  {
    id: 2,
    name: "Nike Revolution 5",
    price: "₱3459",
    image: "/pictures/nikerevo.jpg",
  },
  {
    id: 3,
    name: "Nike Zoom Pegasus",
    price: "₱11,985",
    image: "/pictures/nikepega.jpg",
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">{product.price}</p>
          <button className="buy-button">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

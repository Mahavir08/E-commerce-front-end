import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt="Product" style={{ width: "99%" }} />
      <br />
      <br />
      <h6>{product.name}</h6>
      <br />
      <h5>Rs.{product.price}</h5>
      <br />

      <Link
        to={`/details/${product._id}`}
        style={{
          textDecoration: "none",
          border: "1px solid #ffc107",
          padding: "5px",
          backgroundColor: "#ffc107",
          color: "black",
          borderRadius: "3px",
        }}
      >
        View Details
      </Link>
    </div>
  );
};

export default Products;

import { React, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Ship from "../../styles/assets/ic_shipping.png";

import "./productCard.scss";

import "./productCard.scss";

function ProductCard(props) {
  const product = props.product;

  const getPrice = () => {
    let price = "";
    if (product.price.currency === "ARS") {
      price = "$ ";
    } else if (product.price.currency === "USD") {
      price = "U$D ";
    }
    price += product.price.amount;
    return price;
  };

  const link = `/items/${product.id}`;

  return (
    <div id="productCard">
      <Link to={link}>
        <img className="productImage" src={product.picture}></img>
      </Link>
      <div>
        <div>
          <h1> {getPrice()}</h1>
          {product.free_shipping ? (
            <img src={Ship} alt={"Envio gratis"}></img>
          ) : null}
        </div>
        <div>
          <Link to={link}>
            <h2> {product.title}</h2>
          </Link>
          <p>{product.condition}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

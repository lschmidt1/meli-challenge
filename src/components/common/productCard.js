import { React, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Ship from "../../styles/assets/ic_shipping@2x.png";

import "./productCard.scss";

import "./productCard.scss";

function ProductCard(props) {
  const product = props.product;
  const link = product ? `/items/${product.id}` : "";

  const getPrice = () => {
    let price = "";
    if (product.price) {
      if (product.price.currency === "ARS") {
        price = "$ ";
      } else if (product.price.currency === "USD") {
        price = "U$D ";
      }
      price += product.price.amount;
    }
    return price;
  };

  if (product) {
    return (
      <div id="productCard">
        <Link to={link}>
          <img className="productImage" src={product.picture}></img>
        </Link>
        <div>
          <div>
            <h1> {getPrice()}</h1>
            {product.free_shipping ? (
              <img src={Ship} title={"Envio gratis"} alt={"Envio gratis"}></img>
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
  } else return "";
}

export default ProductCard;

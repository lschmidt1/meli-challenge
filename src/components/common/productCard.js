import { React, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Ship from "../../styles/assets/ic_shipping@2x.png";
import { getPrice } from "../common/helpers";

import "./productCard.scss";

function ProductCard(props) {
  const product = props.product;
  const link = product ? `/items/${product.id}` : "";

  if (product) {
    return (
      <div id="productCard">
        <Link to={link}>
          <img className="productImage" src={product.picture}></img>
        </Link>
        <div role="body">
          <div>
            <div>
              <h1> {getPrice(product)}</h1>
              {product.free_shipping ? (
                <img
                  src={Ship}
                  title={"Envio gratis"}
                  alt={"Envio gratis"}
                ></img>
              ) : null}
            </div>
            <p>{product.state}</p>
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

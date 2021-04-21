import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../common/breadcrumbs";
import Loading from "../common/loading";
import { getPrice } from "../common/helpers";
import { getProductDetail } from "../../redux/actions/productsActions";
import "./productDetail.scss";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const product = useSelector((state) => state.productsReducer.productDetail);
  const categoriesList = useSelector(
    (state) => state.productsReducer.productDetailCategories
  );
  const isLoading = useSelector(
    (state) => state.productsReducer.productsLoading
  );
  const isError = useSelector((state) => state.productsReducer.productsError);

  const { id } = props.match.params;

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [id]);

  let productDetail = <Loading />;
  let breadcrumb = null;

  if (product) {
    return (
      <div id="productDetail">
        <Breadcrumbs categories={categoriesList} />
        <div className="productBody">
          <img className="productImageLarge" src={product.picture} alt="Image" />
          <div>
            <p>
              {product.condition + " "} - {" " + product.sold_quantity} vendidos
            </p>
            <h2>{product.title}</h2>
            <h1>{getPrice(product)}</h1>
            <button className="interactiveButton">Comprar</button>
          </div>
        </div>
        <div className="productFooter">
          <h2>Descripción del producto</h2>
          <p>{product.description}</p>
        </div>
      </div>
    );
  } else return "";
};

export default withRouter(ProductDetail);

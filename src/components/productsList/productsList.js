import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSearchResults } from "../../redux/actions/productsActions";
import Loading from "../common/loading";
import ProductCard from "../common/productCard";
import "./productsList.scss";

import "./productsList.scss";

function ProductsList(props) {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const productsList = useSelector(
    (state) => state.productsReducer.searchResults
  );
  const isLoading = useSelector(
    (state) => state.productsReducer.productsLoading
  );
  const isError = useSelector((state) => state.productsReducer.productsError);

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const search = query.get("search");
    if (search) {
      setSearchValue(search);
    }
  });

  useEffect(() => {
    if (searchValue) {
      dispatch(getSearchResults(searchValue));
    }
  }, [searchValue]);

  return (
    <div id="productsList">
      {/* PRODUCTS LIST LOADING */}
      {isLoading ? <Loading /> : ""}
      {/* PRODUCTS LIST ERROR */}
      {isError ? <h1>ERROR</h1> : ""}
      {/* PRODUCTS LIST LOADED */}
      {productsList.length > 0 && !isLoading && !isError ? (
        <ul>
          {productsList.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default withRouter(ProductsList);

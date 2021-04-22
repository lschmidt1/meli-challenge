import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchResults } from "../../redux/actions/productsActions";
import Loading from "../common/loading";
import Breadcrumbs from "../common/breadcrumbs";
import ProductCard from "../common/productCard";
import "./productsList.scss";

function ProductsList(props) {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const productsList = useSelector(
    (state) => state.productsReducer.searchResults
  );
  const categoriesList = useSelector(
    (state) => state.productsReducer.searchCategories
  );
  const isLoading = useSelector(
    (state) => state.productsReducer.productsLoading
  );
  const isError = useSelector((state) => state.productsReducer.productsError);

  /* GET SEARCH VARIABLE FROM URL */
  useEffect(() => {
    let query;
    let search;
    if (props.location) {
      query = new URLSearchParams(props.location.search);
      search = query.get("search");
    }
    if (search) {
      setSearchValue(search);
    }
  });

  /* DISPATCH FUNCTION FOR SEARCH RESULTS */
  useEffect(() => {
    if (searchValue) {
      dispatch(getSearchResults(searchValue));
    }
  }, [searchValue]);

  if (isLoading) {
    return (
      <div id="productsList">
        <Loading />
      </div>
    );
  }
  if (isError) {
    return (
      <div id="productsList">
        <h1>ERROR</h1>
      </div>
    );
  }
  if (productsList) {
    return (
      <div id="productsList">
        <Breadcrumbs categories={categoriesList} />
        <ul role="productsList">
          {productsList.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsList;

import React from "react";
import { useSelector } from "react-redux";
import "./breadcrumbs.scss";

const Breadcrumbs = () => {
  const categories = useSelector(
    (state) => state.productsReducer.searchCategories
  );
  if (categories) {
    return (
      <div id="breadcrumbs" role="container">
        {categories.map((category, i) => {
          if (i + 1 === categories.length) {
            return <p role="breadText" key={i}> {category}</p>;
          } else {
            return <div><p>{category}&nbsp;&nbsp;</p><p>&gt;</p></div>;
          }
        })}
      </div>
    );
  } else return "";
};

export default Breadcrumbs;

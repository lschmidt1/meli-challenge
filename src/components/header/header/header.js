import { React, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Search from "../../../styles/assets/ic_Search.png";
import Logo from "../../../styles/assets/Logo_ML.png";

import "./header.scss";

function Header(props) {
  /* GET SEARCH VALUE FROM URL */
  const query = new URLSearchParams(props.location.search);
  const search = query.get("search");
/* SET VALUE IF FOUND IN URL, ELSE START EMPTY*/
  const [searchValue, setSearchValue] = useState(search || "");

  function handleSearchProducts(e) {
    e.preventDefault();
    if (searchValue) {
      props.history.push(`/items?search=${searchValue}`);
    }
  }

  return (
    <div id="header">
      <img src={Logo} alt="logo" />
      <form onSubmit={(e) => handleSearchProducts(e)}>
        <input
          placeholder="Nunca dejes de buscar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button onClick={(e) => handleSearchProducts(e)}>
          <img src={Search} alt="logo" />
        </button>
      </form>
    </div>
  );
}

export default withRouter(Header);
import { React, useState, useEffect } from "react";
import Search from "../../styles/assets/ic_Search.png";
import Logo from "../../styles/assets/Logo_ML.png";

import "./header.scss";

function Header(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearchClick() {
    console.log(searchValue);
  }

  return (
    <div id="header">
      <img src={Logo} alt="logo" />
      <form>
        <input
          placeholder="Nunca dejes de buscar"
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button onClick={handleSearchClick}>
          <img src={Search} alt="logo" />
        </button>
      </form>
    </div>
  );
}

export default Header;

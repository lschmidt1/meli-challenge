import React from "react";
import Search from "../../styles/assets/ic_Search.png";
import Logo from "../../styles/assets/Logo_ML.png";

import "./header.scss";

function Header() {
  return (
    <div id="header">
      <img src={Logo} alt="logo" />
      <form>
        <input placeholder="Nunca dejes de buscar"></input>
        <button>
          <img src={Search} alt="logo" />
        </button>
      </form>
    </div>
  );
}

export default Header;

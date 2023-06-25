import React, { useState } from "react";
import "../Header/styles.scss";
import logo from "../Image/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

function Header({ handleChange }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    localStorage.setItem("search", e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleChange();
    }
  };

  return (
    <div className="headercontainer">
      <img src={logo} alt="" />
      <h1>Masters Games</h1>
      <div className="searchheader">
        <input
          type="text"
          className="searchinput"
          placeholder="Pesquise por gênero"
          value={search}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}/>
        <button onClick={handleChange}>
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
}

export default Header;

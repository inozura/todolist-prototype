import React from "react";

import SearchIcon from "../../assets/svg/icons8-search-256.png";
import "./Search.scss";

export default function Search() {
  return (
    <section className="search">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          <img src={SearchIcon} alt="searchicon" width="20" />
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Search Task or Project"
        />
      </div>
    </section>
  );
}

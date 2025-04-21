/** @format */

import { useEffect, useState } from "react";
import "./search-panel.css";

const SearchPanel = ({search,setSearch}) => {
  

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolarni qidirish..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchPanel;

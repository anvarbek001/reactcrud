/** @format */

import React, { useEffect } from "react";
import "./info.css";

const Info = ({ allMovies ,allFavourite,allLike}) => {
  return (
    <div className="info">
      <p className="fs-3 text-uppercase">
        Barcha kinolar soni: {allMovies ? JSON.parse(allMovies).length : 0}
      </p>
      <p className="fs-4 text-uppercase">Sevimli kinolar soni: {allFavourite}</p>
      <p className="fs-4 text-uppercase">Reytingli kinolar soni: {allLike}</p>
    </div>
  );
};

export default Info;

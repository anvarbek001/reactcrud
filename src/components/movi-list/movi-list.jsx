/** @format */

import React from "react";
import "./movi-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";

const MoviList = ({
  data,
  onDelete,
  clickLike,
  clickFavourite,
  favourite,
  like,
  searchData,
}) => {
  return (
    <ul className="movi-list">
      {data.map((item, index) => (
        <MovieListItem
          {...item}
          key={item.id}
          index={index}
          onDelete={() => onDelete(item.id)}
          clickLike={clickLike}
          clickFavourite={clickFavourite}
        />
      ))}
    </ul>
  );
};

export default MoviList;

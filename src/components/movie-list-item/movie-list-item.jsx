/** @format */

import { useState } from "react";
import "./movie-list-item.css";
const MovieListItem = ({
  index,
  id,
  name,
  views,
  onDelete,
  clickLike,
  clickFavourite,
  favourite,
  like,
}) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        favourite ? "favourite" : ""
      }  ${like ? "like" : ""}`}>
      <span onClick={() => clickLike(id)} className="list-group-item-label">
        <span>{index + 1}. </span>
        {name}
      </span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={views}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => clickFavourite(id)}
          type="button"
          className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>
        <button
          onClick={() => onDelete(id)}
          type="button"
          className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default MovieListItem;

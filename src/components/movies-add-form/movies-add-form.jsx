/** @format */

import { Favorite } from "@mui/icons-material";
import "./movies-add-form.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MoviesAddForm = ({ data, setData}) => {
  const [name, setName] = useState("");
  const [views, setViews] = useState("");

  const handleMovie = (e) => {
    e.preventDefault();
    if (name == "" || views == "") {
      return alert("Malumotlarni to`ldiring");
    }

    const newMovie = {
      name: name,
      views: views,
      favourite: false,
      like: false,
      id: uuidv4(),
    };

    localStorage.setItem("movies", JSON.stringify([...data, newMovie]));
    setData([...data, newMovie]);
    setName("");
    setViews("");
  };

  return (
    <div className="movies-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form onSubmit={handleMovie} className=" add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Necha marta korilgan?"
          value={views}
          onChange={(e) => setViews(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default MoviesAddForm;

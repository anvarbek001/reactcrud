/** @format */

import React, { useEffect, useState } from "react";
import "./App.css";
import Info from "../info/info";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../filter/filter";
import MoviList from "../movi-list/movi-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

const App = () => {
  const [data, setData] = useState([]);
  const [sarchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const dataLocal = localStorage.getItem("movies");
    if (dataLocal) {
      const movies = JSON.parse(dataLocal);
      setData(movies);
      setSearchData(movies);
    }
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setSearchData(data);
    } else {
      const updateSearch = data.filter((item) => {
        return item.name?.toLowerCase().includes(search.toLowerCase());
      });

      setSearchData(updateSearch);
    }
  }, [search, data]);

  const clickLike = (id) => {
    const updateData = data.map((item) =>
      item.id === id ? { ...item, like: !item.like } : item
    );

    setData(updateData);
    localStorage.setItem("movies", JSON.stringify(updateData));
  };
  const clickFavourite = (id) => {
    const updateData = data.map((item) =>
      item.id === id ? { ...item, favourite: !item.favourite } : item
    );

    setData(updateData);
    localStorage.setItem("movies", JSON.stringify(updateData));
  };

  const allMovies = localStorage.getItem("movies");
  const allFavourite = data.filter((c) => c.favourite).length;
  const allLike = data.filter((c) => c.like).length;

  useEffect(() => {
    const movies = localStorage.getItem("movies");
    if (movies) {
      setData(JSON.parse(movies));
    }
  }, []);

  const onDelete = (id) => {
    const result = confirm("O'chirilsinmi?");
    if (!result) return;

    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];

    const updatedMovies = storedMovies.filter((item) => item.id !== id);

    localStorage.setItem("movies", JSON.stringify(updatedMovies));

    setData(updatedMovies);
  };

  const allMoviesView = () => {
    const movies = localStorage.getItem("movies");
    if (movies) {
      const allMovie = JSON.parse(movies);
      setSearchData(allMovie);
    }
  };

  const viewMovies = () => {
    const movies = localStorage.getItem("movies");
    if (movies) {
      const allMovie = JSON.parse(movies).sort((a, b) => b.views - a.views);
      setSearchData(allMovie);
    }
  };

  const favoriteMovies = () => {
    const movies = localStorage.getItem("movies");
    if (movies) {
      const movieFavo = JSON.parse(movies).filter(
        (item) => item.favourite === true
      );
      setSearchData(movieFavo);
    }
  };

  const handleEdit = (id, modalName, modalViews) => {
    const movie = localStorage.getItem("movies");
    const updateMovie = JSON.parse(movie).map((item) =>
      item.id === id
        ? { ...item, name: modalName, views: parseInt(modalViews) }
        : item
    );
    setData(updateMovie);
    setSearchData(updateMovie);
    localStorage.setItem("movies", JSON.stringify(updateMovie));
  };

  return (
    <div className="app font-monospace">
      <div className="content">
        <Info
          allMovies={allMovies}
          allFavourite={allFavourite}
          allLike={allLike}
        />
        <div className="search-panel">
          <SearchPanel search={search} setSearch={setSearch} />
          <Filter
            favoriteMovies={favoriteMovies}
            allMoviesView={allMoviesView}
            viewMovies={viewMovies}
          />
        </div>
        <MoviList
          data={sarchData}
          setData={setData}
          onDelete={onDelete}
          clickLike={clickLike}
          clickFavourite={clickFavourite}
          handleEdit={handleEdit}
        />
        <MoviesAddForm data={data} setData={setData} />
      </div>
    </div>
  );
};

export default App;

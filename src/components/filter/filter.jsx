/** @format */

import "./filter.css";
const Filter = ({favoriteMovies,allMoviesView,viewMovies}) => {
  return (
    <div className="btn-group">
      <button onClick={allMoviesView} className="btn btn-dark" type="button">
        Barch kinolar
      </button>
      <button onClick={favoriteMovies} className="btn btn-outline-dark" type="button">
        Mashhur kinolar
      </button>
      <button onClick={viewMovies} className="btn btn-outline-dark" type="button">
        Eng ko'p korilgan kinolar
      </button>
    </div>
  );
};

export default Filter;

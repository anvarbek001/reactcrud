/** @format */

import { useEffect, useState } from "react";
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
  handleEdit,
}) => {
  const [modalName, setModalName] = useState(name);
  const [modalViews, setModalViews] = useState(views);

  useEffect(() => {
    setModalName(name);
    setModalViews(views);
  }, [name, views]);

  const handleSave = () => {
    handleEdit(id, modalName, modalViews);

    const modalElement = document.getElementById(`staticBackdrop-${id}`);
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  };

  return (
    <div>
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
          <button
            type="button"
            className="btn-update btn-sm"
            data-bs-toggle="modal"
            data-bs-target={`#staticBackdrop-${id}`}>
            <i className="fas fa-edit"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>

      <div
        className="modal fade"
        id={`staticBackdrop-${id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label
                htmlFor={`name-${id}`}
                className="form-label d-flex gap-2 align-items-center">
                Name
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name..."
                  value={modalName}
                  onChange={(e) => setModalName(e.target.value)}
                />
              </label>
            </div>
            <div className="modal-body">
              <label
                htmlFor={`views-${id}`}
                className="form-label d-flex gap-2 align-items-center">
                Viewers
                <input
                  className="form-control"
                  type="number"
                  placeholder="Viewers..."
                  value={modalViews}
                  onChange={(e) => setModalViews(e.target.value)}
                />
              </label>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              <button
                onClick={handleSave}
                type="button"
                className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListItem;

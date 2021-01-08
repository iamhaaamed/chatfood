import React, { Component } from "react";
import StarRatings from "react-star-ratings";

export default function FoodCard({
  id,
  bgImage,
  logoImage,
  title,
  type,
  rate,
  onClick,
}) {
  return (
    <div className="col-lg-3">
      <div className="card mb-4 shadow  border-0">
        <div className="card-header  border-0 p-0">
          <img
            className="card-img-top rounded img-fluid"
            src={bgImage}
            style={{ height: 100 }}
          />
        </div>
        <div className="card-body">
          <img
            className="card-img-top rounded-circle shadow img-fluid"
            src={logoImage}
            style={{ width: 150, height: 150, marginTop: -60 }}
          />
          <h5 className="card-title  my-2">{title}</h5>
          <h6 className="card-title my-2">{type}</h6>

          <div>
            <div className="mt-4 mb-2">
              <span className="badge bg-danger mx-2">{rate}</span>
              <StarRatings
                starRatedColor="yellow"
                starDimension="20px"
                starSpacing="5px"
                rating={2}
                numberOfStars={5}
                name="rating"
              />
            </div>
          </div>

          <button
            onClick={onClick}
            className={`btn btn-pill border-danger rounded-pill mt-3`}
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal${id}`}
          >
            مشاهده
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id={`exampleModal${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                منو
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {type}
              <img
                className="card-img-top rounded img-fluid"
                src={logoImage}
                style={{ height: 100 }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                بستن
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

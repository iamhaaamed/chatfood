import React, { Component } from "react";
import StarRatings from "react-star-ratings";

export default function FoodCard({ bgImage, logoImage, title, type, rate }) {
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
            onClick={() => null}
            className={`btn btn-pill border-danger rounded-pill mt-3`}
          >
            مشاهده
          </button>
        </div>
      </div>
    </div>
  );
}

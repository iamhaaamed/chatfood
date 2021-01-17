import React, { Component } from "react";
import StarRatings from "react-star-ratings";

export default function FoodCard({
  id,
  bgImage,
  logoImage,
  title,
  type,
  address,
  phone,
  rating,
  onClick,
  menus,
}) {
  return (
    <div className="col-lg-3 col-6">
      <div className="card mb-4 shadow  border-0 " style={{ borderRadius: 20 }}>
        <div className="card-header  border-0 p-0">
          <img
            className="card-img-top  img-fluid"
            src={bgImage}
            style={{
              height: 100,
              borderTopRightRadius: 24,
              borderTopLeftRadius: 24,
            }}
          />
        </div>
        <div className="card-body">
          <img
            className="card-img-top rounded-circle shadow img-fluid"
            src={logoImage || "https://picsum.photos/200"}
            style={{ width: 130, height: 130, marginTop: -90 }}
          />
          <h5 className="card-title  my-2">{title}</h5>
          <h6 className="card-title my-2">{type.join("، ")}</h6>

          <div>{address}</div>

          <div>
            <div className="mt-4 mb-2">
              <span className="badge bg-danger mx-2">{rating}</span>
              <StarRatings
                starRatedColor="#F6C518"
                starDimension="20px"
                starSpacing="3px"
                rating={rating}
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
                منو {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                id={`carouselExampleControls${id}`}
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  {menus.map((m, i) => (
                    <div class={`carousel-item ${i === 1 ? "active" : ""}`}>
                      <img src={m} class="d-block w-100" alt={title} />
                    </div>
                  ))}
                </div>

                <a
                  class="carousel-control-prev"
                  href={`#carouselExampleControls${id}`}
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href={`#carouselExampleControls${id}`}
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
            <div className="modal-footer">
              <a className="btn btn-primary mx-auto" href={`tel:${phone}`}>
                سفارش <i className="fa fa-phone text-white mx-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

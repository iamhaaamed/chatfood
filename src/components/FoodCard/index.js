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
    <div
      className="col-lg-3 col-6"
      onClick={onClick}
      data-bs-toggle="modal"
      data-bs-target={`#exampleModal${id}`}
    >
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

          <button className={`btn btn-pill border-danger rounded-pill mt-3`}>
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
                className="carousel slide"
                data-interval="false"
              >
                {/* <ol className="carousel-indicators">
                  {menus.map((m, i) => (
                    <li
                      data-bs-target={`carouselExampleControls${id}`}
                      data-bs-slide-to={i}
                      className={i === 0 ? "active" : ""}
                    ></li>
                  ))}
                </ol> */}
                <div className="carousel-inner">
                  {menus.map((m, i) => (
                    <div
                      key={m}
                      data-bs-interval={false}
                      className={`carousel-item  ${i === 0 ? "active" : ""}`}
                    >
                      <img src={m} className="d-block w-100" alt={title} />
                    </div>
                  ))}
                </div>

                <a
                  className="carousel-control-prev text-decoration-none"
                  href={`#carouselExampleControls${id}`}
                  role="button"
                  data-bs-slide="prev"
                >
                  <i className="fa fa-3x fa-chevron-right text-danger mx-1" />
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next text-decoration-none"
                  href={`#carouselExampleControls${id}`}
                  role="button"
                  data-bs-slide="next"
                >
                  <i className="fa fa-3x fa-chevron-left text-danger mx-1" />
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </div>
            <div className="modal-footer">
              <a
                className="btn btn-danger rounded-pill mx-auto"
                href={`tel:${phone}`}
              >
                سفارش <i className="fa fa-phone text-white mx-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

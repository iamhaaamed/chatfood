import React from "react";
import logo from "../../assets/images/logo.png";

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white shadow px-2">
      <a className="navbar-brand" href="#">
        <img src={logo} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a
            className="nav-link active  text-dark"
            aria-current="page"
            href="#"
          >
            <i className="fa fa-home text-danger mx-1" />
            صفحه اصلی
          </a>
          <a className="nav-link text-dark" href="#">
            <i className="fa fa-list text-danger mx-1" />
            دسته بندی ها
          </a>
          <a className="nav-link  text-dark" href="#">
            تماس با ما
          </a>
          <a className="nav-link  text-dark" href="#">
            درباره ما
          </a>
        </div>
      </div>
      <div className="col-1 me-2">
        <select class="form-select" aria-label="Default select example">
          <option value="1">وکیل اباد</option>
          <option value="2">ستارخان</option>
          <option value="3">طرقبه</option>
        </select>
      </div>
      <div className="col-1">
        <button className="btn btn-pill btn-danger rounded-pill">
          ثبت رستوران
          <i className="fa fa-plus-circle text-white mx-1" />
        </button>
      </div>
    </nav>
  );
};

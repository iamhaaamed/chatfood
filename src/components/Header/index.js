import React from "react";
import useGAEventTracke from "../../hooks/useGAEventTracker";

export default () => {
  const GAEventsTracker = useGAEventTracke("Links");
  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <a className="navbar-brand" href="#">
        <img
          src={require("../../assets/images/logo.svg").default}
          className="img-fluid"
        />
      </a>

      <nav className="my-2 my-md-0 me-md-3">
        <a className="p-2 text-dark text-decoration-none" href="#">
          <i className="fa fa-home text-danger mx-1" /> صفحه اصلی
        </a>
        <a className="p-2 text-dark text-decoration-none" href="#">
          <i className="fa fa-list text-danger mx-1" /> دسته بندی ها
        </a>
        <a className="p-2 text-dark text-decoration-none" href="#">
          تماس با ما
        </a>
        <a className="p-2 text-dark text-decoration-none" href="#">
          درباره ما
        </a>
      </nav>
      <div className="my-0 ms-md-auto d-flex align-items-center justify-center">
        <div className="col-5">
          <select
            className="form-select rounded-pill border-0 shadow"
            aria-label="Default select example"
          >
            <option value="1">وکیل اباد</option>
            <option value="2">ستارخان</option>
            <option value="3">طرقبه</option>
          </select>
        </div>
        <button
          className="btn btn-pill btn-danger rounded-pill ms-1 col-7"
          onClick={() => GAEventsTracker("ثبت رستوران")}
        >
          ثبت رستوران
          <i className="fa fa-plus-circle text-white mx-1" />
        </button>
      </div>
    </header>
  );
};

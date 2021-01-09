import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import pizza from "../../assets/images/pizza.png";
import healthy from "../../assets/images/healthy.png";
import FoodCard from "../../components/FoodCard";

import useGAEventTracke from "../../hooks/useGAEventTracker";

const data = [
  {
    id: 1,
    title: "صدف",
    bgImage: "https://picsum.photos/200",
    logoImage: "https://picsum.photos/100",
    category: "فست فود",
    rate: " 2.0",
  },
  {
    id: 2,
    title: "شاهان",
    bgImage: "https://picsum.photos/200",
    logoImage: "https://picsum.photos/100",
    category: "غذای ایرانی",
    rate: "3.0",
  },
  {
    id: 3,
    title: "کریم",
    bgImage: "https://picsum.photos/200",
    logoImage: "https://picsum.photos/100",
    category: "رستوران",
    rate: "4.0",
  },
  {
    id: 4,
    title: "نارنج",
    bgImage: "https://picsum.photos/200",
    logoImage: "https://picsum.photos/100",
    category: "سالاد",
    rate: " 3.0",
  },
  {
    id: 5,
    title: " طرقبه",
    bgImage: "https://picsum.photos/200",
    logoImage: "https://picsum.photos/100",
    category: "فست فود",
    rate: "5.0",
  },
  {
    id: 6,
    title: "استاربرگر",
    bgImage: "https://picsum.photos/200",
    logoImage: "https://picsum.photos/100",
    category: "غذای ایرانی",
    rate: "4.0",
  },
  {
    id: 7,
    title: "دایی",
    bgImage: "https://picsum.photos/200",
    logoImage: "https://picsum.photos/100",
    category: "غذای ایرانی",
    rate: "1.0",
  },
  {
    id: 8,
    title: "البرز",
    bgImage: "https://picsum.photos/200",
    logoImage: "https://picsum.photos/100",
    category: "سالاد",
    rate: "2.0",
  },
];

const Home = () => {
  const GAEventsTracker = useGAEventTracke("Links");

  const [selectedFoodCard, setSelectedFoodCard] = useState();

  const [selectedFilter, setSelectedFilter] = useState("همه");
  const [term, setTerm] = useState("");

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(
      data.filter((str) => {
        return (
          str.title.indexOf(term) !== -1 || str.category.indexOf(term) !== -1
        );
      })
    );
  }, [term]);

  useEffect(() => {
    if (selectedFilter !== "همه") {
      setFilteredData(
        data.filter((str) => {
          return str.category === selectedFilter;
        })
      );
    } else {
      setFilteredData(data);
    }
  }, [selectedFilter]);

  return (
    <div style={{ flex: 1 }}>
      <Header />
      <div>
        <div className="col-md-3 mx-auto my-5 px-3">
          <div className="text-center">
            <div className="input-group shadow rounded-pill">
              <input
                type="text"
                className="form-control border-0 rounded-pill"
                placeholder="جستجوي نام رستوران، غذا "
                value={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                }}
              />
              <div className="input-group-append rounded-pill ">
                <button className="btn btn-white " type="button">
                  <i className="fa fa-search text-danger" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src={healthy} className="img-fluid" />
            </div>

            <div className="col-md-8 text-center">
              <h5>
                <strong>دنبال غذای خوب میگردی؟</strong>
              </h5>
              <h3 className="text-danger ">
                <strong>چت فود</strong>
              </h3>
              <p className="my-5">
                <strong> کمکت میکنه</strong>
                <span className="text-danger"> ;) </span>
              </p>
            </div>
            <div className="col-md-2">
              <img src={pizza} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <strong> بهترین ها برای شما</strong>
          <div className="col-md-1 mx-auto my-5">
            <div className="text-center">
              <hr className="text-danger"></hr>
            </div>
          </div>
          {["همه", "فست فود", "غذای ایرانی", "سالاد"].map((item) => (
            <button
              onClick={() => setSelectedFilter(item)}
              className={`btn btn-pill btn-${
                item === selectedFilter ? "danger" : "light"
              } rounded-pill shadow mx-2`}
            >
              {item}
            </button>
          ))}
          <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              {filteredData.map((f) => (
                <FoodCard
                  key={f.id}
                  {...f}
                  onClick={() => {
                    setSelectedFoodCard(f);
                    GAEventsTracker("منو رستوران", f);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

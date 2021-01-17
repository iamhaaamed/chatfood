import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import pizza from "../../assets/images/pizza.png";
import healthy from "../../assets/images/healthy.png";
import FoodCard from "../../components/FoodCard";

import useGAEventTracke from "../../hooks/useGAEventTracker";

const data = [
  {
    id: 1,
    title: "آتش برگر",
    bgImage: require("../../assets/images/backgrounds/آتش برگر.jpg").default,
    logoImage: require("../../assets/images/logos/آتش برگر.png").default,
    type: ["فست فود", "برگر", "ساندویچ"],
    rating: 4.0,
    phone: "09370669519",
    address: "بین وکیل آباد 26 و 28",
    link: "https://m.snappfood.ir/restaurant/0yl7g3",
    category: [
      { title: "سالاد" },
      { title: "فست فود", sub: [{ title: "ساندویچ" }, { title: "برگر" }] },
    ],
    menus: [
      require("../../assets/images/menus/آتش برگر1.jpg").default,
      require("../../assets/images/menus/آتش برگر2.jpg").default,
    ],
  },
  {
    id: 2,
    title: "بابا دونر",
    bgImage: null,
    logoImage: require("../../assets/images/logos/بابا دونر.png").default,
    type: ["ساندویچ", "بورک", "کباب"],
    rating: 3.9,
    phone: "09370669519",
    address: "بین وکیل آباد 25 و دانش آموز",
    link: "https://m.snappfood.ir/restaurant/324dlp",
    category: [{ title: "سالاد" }, { title: "غذای فرنگی" }],
    menus: [
      require("../../assets/images/menus/بابا دونر1.jpg").default,
      require("../../assets/images/menus/بابا دونر2.jpg").default,
    ],
  },
  {
    id: 3,
    title: "پیتزا شبدیز",
    bgImage: require("../../assets/images/backgrounds/پیتزا شبدیز.jpg").default,
    logoImage: require("../../assets/images/logos/پیتزا شبدیز.jpg").default,
    type: ["فست فود", "برگر", "پیتزا"],
    rating: 4.3,
    phone: "09370669519",
    address: "بین هفت نیر13 و 15",
    link: "https://snappfood.ir/restaurant/menu/pvrezv/shabdiz7tir/haftetir",
    category: [
      { title: "سالاد" },
      {
        title: "فست فود",
        sub: [{ title: "ساندویچ" }, { title: "برگر" }, { title: "پیتزا" }],
      },
    ],
    menus: [
      require("../../assets/images/menus/پیتزا شبدیز1.jpg").default,
      require("../../assets/images/menus/پیتزا شبدیز2.jpg").default,
      require("../../assets/images/menus/پیتزا شبدیز3.jpg").default,
    ],
  },
  {
    id: 4,
    title: "پیتزا فرنو",
    bgImage: require("../../assets/images/backgrounds/پیتزا فرنو.jpg").default,
    logoImage: require("../../assets/images/logos/پیتزا فرنو.png").default,
    type: ["فست فود", "برگر", "پیتزا", "سوخاری"],
    rating: 4.2,
    phone: "09370669519",
    address: "نبش وکیل آباد69",
    link: "https://m.snappfood.ir/restaurant/0le77k",
    category: [
      { title: "غذای فرنگی" },
      { title: "سالاد" },
      {
        title: "فست فود",
        sub: [
          { title: "پیتزا" },
          { title: "برگر" },
          { title: "سوخاری" },
          { title: "پاستا" },
          { title: "استیک" },
        ],
      },
    ],
    menus: [
      require("../../assets/images/menus/پیتزا فرنو1.jpg").default,
      require("../../assets/images/menus/پیتزا فرنو2.jpg").default,
    ],
  },
  {
    id: 5,
    title: "پیتزا کازابلانکا",
    bgImage: require("../../assets/images/backgrounds/پیتزا کازابلانکا.jpg")
      .default,
    logoImage: require("../../assets/images/logos/پیتزا کازابلانکا.png")
      .default,
    type: ["پیتزا", "برگر", "ساندویچ"],
    rating: 4.2,
    phone: "09370669519",
    address: "بین وکیل آباد 27 و 29",
    link: "https://m.snappfood.ir/restaurant/0yl7g3",
    category: [
      { title: "غذای فرنگی" },
      {
        title: "فست فود",
        sub: [
          { title: "ساندویچ" },
          { title: "برگر" },
          { title: "پیتزا" },
          { title: "سوخاری" },
        ],
      },
    ],
    menus: ["../../assets/images/menus/", "../../assets/images/menus/"],
  },
  {
    id: 6,
    title: "پیتزا هیزمی",
    bgImage: require("../../assets/images/backgrounds/پیتزا هیزمی.jpg").default,
    logoImage: require("../../assets/images/logos/پیتزا هیزمی.jpg").default,
    type: ["پیتزا"],
    rating: 3.9,
    phone: "09370669519",
    address: "بین وکیل آباد26 و 28",
    link: "https://m.snappfood.ir/restaurant/pzvv1w",
    category: [
      { title: "غذای فرنگی" },
      { title: "فست فود", sub: [{ title: "پیتزا" }] },
    ],
    menus: [
      require("../../assets/images/menus/پیتزا کازابلانکا1.jpg").default,
      require("../../assets/images/menus/پیتزا کازابلانکا2.jpg").default,
      require("../../assets/images/menus/پیتزا کازابلانکا3.jpg").default,
      require("../../assets/images/menus/پیتزا کازابلانکا4.jpg").default,
      require("../../assets/images/menus/پیتزا کازابلانکا5.jpg").default,
    ],
  },
  {
    id: 7,
    title: "پیتزا خانه کرپ",
    bgImage: null,
    logoImage: require("../../assets/images/logos/پیتزا خانه کرپ.png").default,
    type: ["غذای فرنگی", "استیک", "ساندویچ"],
    rating: 4.1,
    phone: "09370669519",
    address: "وکیل آباد، بعد از پل سیدرضی",
    link: "https://snappfood.ir/restaurant/menu/0l899j/khanekerep",
    category: [
      { title: "سالاد" },
      {
        title: "فست فود",
        sub: [{ title: "ساندویچ" }, { title: "پاستا" }, { title: "برگر" }],
      },
    ],
    menus: [
      require("../../assets/images/menus/پیتزا خانه کرپ1.jpg").default,
      require("../../assets/images/menus/پیتزا خانه کرپ2.jpg").default,
    ],
  },
  {
    id: 8,
    title: "دورچین",
    bgImage: require("../../assets/images/backgrounds/دورچین.jpg").default,
    logoImage: require("../../assets/images/logos/دورچین.jpg").default,
    type: ["ایرانی", "کباب", "خورشت"],
    rating: 4.3,
    phone: "09370669519",
    address: "بین وکیل آباد 34 و 36",
    link: "https://m.snappfood.ir/restaurant/0nrg2r",
    category: [
      { title: "غذای ایرانی", sub: [{ title: "کباب" }, { title: "خورشت" }] },
    ],
    menus: [
      require("../../assets/images/menus/دورچین1.jpg").default,
      require("../../assets/images/menus/دورچین2.jpg").default,
      require("../../assets/images/menus/دورچین3.jpg").default,
      require("../../assets/images/menus/دورچین4.jpg").default,
      require("../../assets/images/menus/دورچین5.jpg").default,
    ],
  },
  {
    id: 9,
    title: "رستوران ایتالیایی پای",
    bgImage: require("../../assets/images/backgrounds/رستوران ایتالیایی پای.jpg")
      .default,
    logoImage: require("../../assets/images/logos/رستوران ایتالیایی پای.jpg")
      .default,
    type: ["فست فود", "پیتزا", "پاستا", "استیک"],
    rating: 4.0,
    phone: "09370669519",
    address: "بین وکیل آباد55 و 57",
    link: "../../assets/images/menus/",
    category: [
      { title: "سالاد" },
      { title: "غذای فرنگی" },
      {
        title: "فست فود",
        sub: [
          { title: "پیتزا" },
          { title: "برگر" },
          { title: "پاستا" },
          { title: "استیک" },
        ],
      },
    ],
    menus: [
      require("../../assets/images/menus/رستوران ایتالیایی پای1.jpg").default,
      require("../../assets/images/menus/رستوران ایتالیایی پای2.jpg").default,
      require("../../assets/images/menus/رستوران ایتالیایی پای3.jpg").default,
    ],
  },
  {
    id: 10,
    title: "رستوران کلبه",
    bgImage: require("../../assets/images/backgrounds/رستوران کلبه.jpg")
      .default,
    logoImage: require("../../assets/images/logos/رستوران کلبه.jpg").default,
    type: ["کباب", "خورشت", "استیک"],
    rating: 4.3,
    phone: "09370669519",
    address: "نبش هاشمیه 18",
    link: "https://m.snappfood.ir/restaurant/0yl7g3",
    category: [
      { title: "غذای فرنگی" },
      { title: "ایرانی", sub: [{ title: "کباب" }, { title: "خورشت" }] },
    ],
    menus: [
      require("../../assets/images/menus/رستوران کلبه1.jpg").default,
      require("../../assets/images/menus/رستوران کلبه2.jpg").default,
      require("../../assets/images/menus/رستوران کلبه3.jpg").default,
      require("../../assets/images/menus/رستوران کلبه4.jpg").default,
    ],
  },
  {
    id: 11,
    title: "سیتی استار",
    bgImage: require("../../assets/images/backgrounds/سیتی استار.jpg").default,
    logoImage: require("../../assets/images/logos/سیتی استار.jpg").default,
    type: ["فست فود", "پیتزا", "برگر"],
    rating: 4.1,
    phone: "09370669519",
    address: "بین وکیل آباد 23 و 25",
    link: "../../assets/images/menus/",
    category: [
      { title: "سالاد" },
      {
        title: "فست فود",
        sub: [{ title: "پیتزا" }, { title: "برگر" }, { title: "سوخاری" }],
      },
    ],
    menus: [
      require("../../assets/images/menus/سیتی استار1.jpg").default,
      require("../../assets/images/menus/سیتی استار2.jpg").default,
      require("../../assets/images/menus/سیتی استار3.jpg").default,
      require("../../assets/images/menus/سیتی استار4.jpg").default,
    ],
  },
  {
    id: 12,
    title: "غذای دریایی سولو",
    bgImage: require("../../assets/images/backgrounds/غذای دریایی سولو.jpg")
      .default,
    logoImage: require("../../assets/images/logos/غذای دریایی سولو.png")
      .default,
    type: ["ایرانی", "فرنگی", "غذای دریایی"],
    rating: 4.4,
    phone: "09370669519",
    address: "هاشمیه 28",
    link: "../../assets/images/menus/",
    category: [
      { title: "سالاد" },
      { title: "غذای فرنگی" },
      { title: "غذای ایرانی", sub: [{ title: "کباب" }] },
    ],
    menus: [
      require("../../assets/images/menus/غذای دریایی سولو1.jpg").default,
      require("../../assets/images/menus/غذای دریایی سولو2.jpg").default,
    ],
  },
  {
    id: 13,
    title: "فست فود ریواس",
    bgImage: require("../../assets/images/backgrounds/فست فود ریواس.jpg")
      .default,
    logoImage: require("../../assets/images/logos/فست فود ریواس.png").default,
    type: ["فست فود", "برگر", "ساندویچ"],
    rating: 4.3,
    phone: "09370669519",
    address: "بین هنرستان19و21",
    link: "../../assets/images/menus/",
    category: [
      { title: "سالاد" },
      { title: "فست فود", sub: [{ title: "ساندویچ" }, { title: "برگر" }] },
    ],
    menus: [
      require("../../assets/images/menus/فست فود ریواس1.jpg").default,
      require("../../assets/images/menus/فست فود ریواس2.jpg").default,
    ],
  },

  {
    id: 14,
    title: "فست فود ماکیماه",
    bgImage: require("../../assets/images/backgrounds/فست فود ماکیماه.jpg")
      .default,
    logoImage: require("../../assets/images/logos/فست فود ماکیماه.png").default,
    type: ["فست فود", "برگر"],
    rating: 4.0,
    phone: "09370669519",
    address: "بین وکیل آباد 29 و 31",
    link: "../../assets/images/menus/",
    category: [
      { title: "غذای فرنگی" },
      { title: "فست فود", sub: [{ title: "برگر" }] },
    ],
    menus: [
      require("../../assets/images/menus/فست فود ماکیماه1.jpg").default,
      require("../../assets/images/menus/فست فود ماکیماه2.jpg").default,
    ],
  },

  {
    id: 15,
    title: "فست فود مهروآتش",
    bgImage: require("../../assets/images/backgrounds/فست فود مهروآتش.jpg")
      .default,
    logoImage: require("../../assets/images/logos/فست فود مهروآتش.png").default,
    type: ["فست فود", "برگر", "سوخاری"],
    rating: 4.0,
    phone: "09370669519",
    address: "هاشمیه34",
    link: "../../assets/images/menus/",
    category: [
      { title: "فست فود", sub: [{ title: "سوخاری" }, { title: "برگر" }] },
    ],
    menus: [
      require("../../assets/images/menus/فست فود مهروآتش1.jpg").default,
      require("../../assets/images/menus/فست فود مهروآتش2.jpg").default,
      require("../../assets/images/menus/فست فود مهروآتش3.jpg").default,
    ],
  },

  {
    id: 16,
    title: "کافه رستوران رابو",
    bgImage: require("../../assets/images/backgrounds/کافه رستوران رابو.jpg")
      .default,
    logoImage: require("../../assets/images/logos/کافه رستوران رابو.jpg")
      .default,
    type: ["پیتزا", "برگر", "پاستا", "سوخاری"],
    rating: 4.0,
    phone: "09370669519",
    address: "صیاد 12 و 14",
    link: "../../assets/images/menus/",
    category: [
      { title: "سالاد" },
      {
        title: "فست فود",
        sub: [
          { title: "ساندویچ" },
          { title: "برگر" },
          { title: "پاستا" },
          { title: "پیتزا" },
        ],
      },
    ],
    menus: [
      require("../../assets/images/menus/کافه رستوران رابو1.jpg").default,
      require("../../assets/images/menus/کافه رستوران رابو2.jpg").default,
    ],
  },

  {
    id: 17,
    title: "کافه رستوران کلید",
    bgImage: require("../../assets/images/backgrounds/کافه رستوران کلید.jpg")
      .default,
    logoImage: require("../../assets/images/logos/کافه رستوران کلید.png")
      .default,
    type: ["فست فود", "استیک", "برگر", "پاستا"],
    rating: 4.3,
    phone: "09370669519",
    address: "کوثر1، لاله3",
    link: "https://snappfood.ir/restaurant/menu/31m1y2/kilid",
    category: [
      { title: "سالاد" },
      { title: "غذای فرنگی" },
      {
        title: "فست فود",
        sub: [
          { title: "ساندویچ" },
          { title: "برگر" },
          { title: "پاستا" },
          { title: "پیتزا" },
        ],
      },
    ],
    menus: [
      require("../../assets/images/menus/کافه رستوران کلید1.png").default,
      require("../../assets/images/menus/کافه رستوران کلید2.jpg").default,
      require("../../assets/images/menus/کافه رستوران کلید3.jpg").default,
    ],
  },

  {
    id: 18,
    title: "کباب ترکی اترک",
    bgImage: require("../../assets/images/backgrounds/کباب ترکی اترک.jpg")
      .default,
    logoImage: require("../../assets/images/logos/کباب ترکی اترک.png").default,
    type: ["فست فود", "کباب", "ساندویچ"],
    rating: 4.1,
    phone: "09370669519",
    address: "تقاطع جلال آل احمد و فرهنگ",
    link: "../../assets/images/menus/",
    category: [
      { title: "سالاد" },
      { title: "غذای فرنگی" },
      {
        title: "فست فود",
        sub: [{ title: "ساندویچ" }, { title: "برگر" }, { title: "پیتزا" }],
      },
    ],
    menus: [
      require("../../assets/images/menus/کباب ترکی اترک1.jpg").default,
      require("../../assets/images/menus/کباب ترکی اترک2.jpg").default,
      require("../../assets/images/menus/کباب ترکی اترک3.jpg").default,
      require("../../assets/images/menus/کباب ترکی اترک4.jpg").default,
    ],
  },

  {
    id: 19,
    title: "کباب ترکی سالار",
    bgImage: require("../../assets/images/backgrounds/کباب ترکی سالار.jpg")
      .default,
    logoImage: require("../../assets/images/logos/کباب ترکی سالار.png").default,
    type: ["کباب ترکی", "ساندویچ"],
    rating: 3.8,
    phone: "09370669519",
    address: "بین هفت تیر19 و21",
    link: "../../assets/images/menus/",
    category: [{ title: "غذای فرنگی" }],
    menus: [
      require("../../assets/images/menus/کباب ترکی سالار1.jpg").default,
      require("../../assets/images/menus/کباب ترکی سالار2.jpg").default,
      require("../../assets/images/menus/کباب ترکی سالار3.jpg").default,
    ],
  },

  {
    id: 20,
    title: "کباب سلطان سید رضی",
    bgImage: null,
    logoImage: require("../../assets/images/logos/کباب سلطان سید رضی.png")
      .default,
    type: ["غذای ایرانی", "کباب", "جوجه کباب", "ساندویچ"],
    rating: 3.6,
    phone: "09370669519",
    address: "نبش سیدرضی21",
    link: "https://snappfood.ir/restaurant/menu/0w94w5/soltan",
    category: [{ title: "غذای ایرانی", sub: [{ title: "کباب" }] }],
    menus: [
      require("../../assets/images/menus/کباب سلطان سید رضی1.jpg").default,
      require("../../assets/images/menus/کباب سلطان سید رضی2.jpg").default,
      require("../../assets/images/menus/کباب سلطان سید رضی3.jpg").default,
    ],
  },

  {
    id: 21,
    title: "کترینگ هخامنش",
    bgImage: require("../../assets/images/backgrounds/کترینگ هخامنش.jpg")
      .default,
    logoImage: require("../../assets/images/logos/کترینگ هخامنش.png").default,
    type: ["کباب", "ایرانی"],
    rating: 3.8,
    phone: "09370669519",
    address: "بین وکیل آباد 14 و 16",
    link: "https://m.snappfood.ir/restaurant/p4w2n3",
    category: [
      { title: "سالاد" },
      { title: "غذای ایرانی", sub: [{ title: "کباب" }] },
    ],
    menus: [
      require("../../assets/images/menus/کترینگ هخامنش1.jpg").default,
      require("../../assets/images/menus/کترینگ هخامنش2.jpg").default,
      require("../../assets/images/menus/کترینگ هخامنش3.jpg").default,
    ],
  },

  {
    id: 22,
    title: "نوبهاران",
    bgImage: require("../../assets/images/backgrounds/نوبهاران.jpg").default,
    logoImage: require("../../assets/images/logos/نوبهاران.png").default,
    type: ["خورشت", "کباب", "ایرانی"],
    rating: 2.0,
    phone: "09370669519",
    address: "بین چهارراه معلم و معلم18",
    link: "https://snappfood.ir/restaurant/menu/p6dlrw/nobaharan",
    category: [
      { title: "سالاد" },
      { title: "غذای ایرانی", sub: [{ title: "کباب" }, { title: "خورشت" }] },
    ],
    menus: [
      require("../../assets/images/menus/نوبهاران1.jpg").default,
      require("../../assets/images/menus/نوبهاران2.jpg").default,
      require("../../assets/images/menus/نوبهاران3.jpg").default,
      require("../../assets/images/menus/نوبهاران4.jpg").default,
    ],
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
        return str.title.indexOf(term) !== -1 || str.type.indexOf(term) !== -1;
      })
    );
  }, [term]);

  useEffect(() => {
    if (selectedFilter !== "همه") {
      setFilteredData(
        data.filter((str) => {
          return (
            str.type.includes(selectedFilter) ||
            str.category.find(
              (c) =>
                c.title.includes(selectedFilter) ||
                c.sub?.find((s) => s.title.includes(selectedFilter))
            )
          );
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
          {["همه", "فست فود", "غذای فرنگی", "غذای ایرانی", "سالاد"].map(
            (item) => (
              <button
                onClick={() => setSelectedFilter(item)}
                className={`btn btn-pill btn-${
                  item === selectedFilter ? "danger" : "light"
                } rounded-pill shadow mx-2`}
              >
                {item}
              </button>
            )
          )}
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

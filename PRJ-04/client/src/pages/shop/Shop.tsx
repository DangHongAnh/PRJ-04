import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./shop.css";
import axios from "axios";
import { formatMoney } from "../../helps/formatMoney";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Shop = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  // Option
  const material = [
    { text: "Nhựa", value: 1 },
    { text: "Kim loại", value: 2 },
    { text: "Nhựa dẻo", value: 3 },
  ];
  const style = [
    { text: "Hình vuông", value: 1 },
    { text: "Hình trụ", value: 2 },
    { text: "Oval", value: 3 },
  ];

  const [materialOption, setMaterialOption] = useState("");
  const [styleOption, setStyleOption] = useState("");
  //Glass
  interface Glass {
    glassId: number;
    glassName: String;
    glassPrice: number;
    glassSale: number;
    img1: string;
  }
  const [glasses, setGlasses] = useState<Glass[]>([]);
  const loadGlass = () => {
    if (materialOption == "" && styleOption == "") {
      axios
        .get(`http://localhost:8080/api/v1/shop/glasses`)
        .then((res) => setGlasses(res.data.data))
        .catch((err) => console.log(err));
    } else if (styleOption == "" && materialOption != "") {
      axios
        .get(
          `http://localhost:8080/api/v1/shop/glasses?keyMaterial=${materialOption}`
        )
        .then((res) => setGlasses(res.data.data))
        .catch((err) => console.log(err));
    } else if (styleOption != "" && materialOption == "") {
      axios
        .get(
          `http://localhost:8080/api/v1/shop/glasses?keyStyle=${styleOption}`
        )
        .then((res) => setGlasses(res.data.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(
          `http://localhost:8080/api/v1/shop/glasses?keyStyle=${styleOption}&keyMaterial=${materialOption}`
        )
        .then((res) => setGlasses(res.data.data))
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    loadGlass();
  }, [styleOption, materialOption]);

  // Detail
  const handleDetail = (id: number) => (
    navigate(`/detail/${id}`),
    window.scroll({
      top: 0,
    })
  );
  return (
    <>
      <Header />
      <div>
        {" "}
        <div className="shop-product">
          <h1>Sản phẩm</h1>
        </div>
        <div className="shop-text">
          <h2>POD</h2>
          <p>
          Sản phẩm đã mang đến cho thế giới vape sự đột phá lớn và hoàn hảo nhất cho sự tiện dụng.
          </p>
        </div>
        <div className="row">
          <div className="col-2">
            <h3>Chất liệu</h3>
            <ul>
              {material.map((e, i) => (
                <li key={i}>
                  <input
                    type="checkbox"
                    value={e.value}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setMaterialOption(e.target.value);
                      } else {
                        setMaterialOption("");
                      }
                    }}
                  />
                  {e.text}
                </li>
              ))}
            </ul>

            <h3>Hình dáng</h3>
            <ul>
              {style.map((e, i) => (
                <li key={i}>
                  <input
                    type="checkbox"
                    value={e.value}
                    onChange={(e) => setStyleOption(e.target.value)}
                  />
                  {e.text}
                </li>
              ))}
            </ul>
            <h3>Khoảng giá</h3>
            <ul>
              <li>
                <input type="checkbox" />
                100.000đ - 200.000đ
              </li>
              <li>
                <input type="checkbox" />
                300.000đ - 500.000đ
              </li>
              <li>
                <input type="checkbox" />
                600.000đ
              </li>
            </ul>
          </div>
          <div className="col-10" style={{ width: "80%" }}>
            <div className="shop-kinhs">
              <ul className="shop-product1">
                {glasses.length > 0 &&
                  glasses.map((e: Glass, i) => (
                    <li className="shop-product2" key={i}>
                      <div className="addimg" style={{ position: "relative" }}>
                        <img className="" src={e.img1} alt="" />
                        <p className="addtocart">
                          <i
                            style={{ fontSize: "20px" }}
                            className="fa-solid fa-cart-shopping"
                          ></i>
                        </p>
                        <p className="sale">SALE</p>
                      </div>

                      <br />
                      <span
                        className="shop-product3"
                        onClick={() => handleDetail(e.glassId)}
                      >
                        {e.glassName}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <s className="shop-product4">
                          {formatMoney(e.glassPrice)}
                        </s>
                        <span
                          className="shop-product4"
                          style={{
                            color: "red",
                            fontWeight: "bolder",
                            fontStyle: "italic",
                          }}
                        >
                          {formatMoney(e.glassPrice * (1 - e.glassSale))}
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="product-carousel">
          <h1>Sản phẩm nổi bật</h1>
          <Slider {...settings}>
            <div className="product-carousel1">
              <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Frill%2Faspire_riil_x_3dd72fbd23b54c50bd639b00cc151f37_master.webp?alt=media&token=e00cac80-db5c-48fc-99c0-4b074d99c17f"
                alt=""
              />
              <br />
              <span className="shop-product3">BỘ POD SYSTEM RIIL X KIT </span>
              <br />
              <span className="shop-product4">950,000₫</span>
            </div>
            <div className="product-carousel1">
              <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fcalibull%2Fcaliburn_a3_full_9327a1c9de2e426d904652880a25066e_master.webp?alt=media&token=ac38b228-2c09-4b27-9213-97704b1d655d"
                alt=""
              />
              <br />
              <span className="shop-product3">                    BỘ POD SYSTEM CALIBURN A3 
</span>
              <br />
              <span className="shop-product4">450,000₫</span>
            </div>
            <div className="product-carousel1">
              <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fdot%20v2%2Fdotaio_v2_f62e66a0e60a41fab35721beef2d5ec1_master.webp?alt=media&token=e6e395ec-2dd7-4d2a-807f-ad4df342d223"
                alt=""
              />
              <br />
              <span className="shop-product3">BỘ POD SYSTEM DOTAIO </span>
              <br />
              <span className="shop-product4">2,800,000₫</span>
            </div>
            <div className="product-carousel1">
              <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Forigin%2Foxva_origin_mini_kit_60w_full_color_8cc27125874c47b4a60304579f0bc650_master.jpg?alt=media&token=8d76980c-b4ad-45ba-9f54-3d4c2c623a8b"
                alt=""
              />
              <br />
              <span className="shop-product3">BỘ POD SYSTEM ORIGIN MINI </span>
              <br />
              <span className="shop-product4">342,000₫</span>
            </div>
            <div className="product-carousel1">
              <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fdot%2Fdot_1_18c3bea07a2e476b990cf04f8947a4f5_master.webp?alt=media&token=84c8f47b-85fa-4086-86e2-8579c3e85846"
                alt=""
              />
              <br />
              <span className="shop-product3">BỘ POD SYSTEM DOT SWITCH</span>
              <br />
              <span className="shop-product4">342,000₫</span>
            </div>
            <div className="product-carousel1">
              <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Ffelix%2Faspire_flexus_stik_all_color_e0618ea5b58e4070b9a7dbb18948fc53_master.webp?alt=media&token=1c59b87b-068d-4ed3-a646-058cb46c2293"
                alt=""
              />
              <br />
              <span className="shop-product3">BỘ POD SYSTEM FLEXUS Q KIT</span>
              <br />
              <span className="shop-product4">356,000₫</span>
            </div>
            <div className="product-carousel1">
              <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Forion%2Forion_2_557379ab567d4641b52744eab3fd565a_master.jpg?alt=media&token=5c6f7773-fe52-4b61-b3f6-75568fd1b7a1"
                alt=""
              />
              <br />
              <span className="shop-product3"> BỘ POD SYSTEM ORION 2</span>
              <br />
              <span className="shop-product4">252,000₫</span>
            </div>
          </Slider>
        </div>
        <div style={{ padding: " 0% 5%", marginBottom: "6%" }}>
          <div className="product-one">
            <h1>SẢN PHẨM MỚI NHẤT</h1>
            <div className="" style={{ display: "flex", gap: "23%" }}>
              <div style={{ width: "15%" }}>
                <img
                  className="product-img"
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fvape-tricks.webp?alt=media&token=0d33a5e6-3189-4110-ab20-b7f845f18d59"
                  alt=""
                />
              </div>
              <div style={{ width: "61%" }}>
                <Slider {...settings1}>
                  <div className="product-new1">
                    <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fgotex%2Fgogek_s_bd48aab4061d4b35ac4d7148e166b38d_master.webp?alt=media&token=e10bc059-038b-41eb-8660-031e932b2a5e"
                      alt=""
                    />
                    <br />
                    <span className="shop-product3">GK – 800NC004</span>
                    <br />
                    <span className="shop-product4">720,000₫</span>
                  </div>
                  <div className="product-new1">
                    <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Frill%2Faspire_riil_x_3dd72fbd23b54c50bd639b00cc151f37_master.webp?alt=media&token=e00cac80-db5c-48fc-99c0-4b074d99c17f"
                      alt=""
                    />
                    <br />
                    <span className="shop-product3">BỘ POD SYSTEM RIIL X</span>
                    <br />
                    <span className="shop-product4">950,000₫</span>
                  </div>
                  <div className="product-new1">
                    <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Ffelix%2Faspire_flexus_q_1_4a09b36376b242c7a9ea2de2a89b5f7a_master.webp?alt=media&token=3cfd4b56-f95b-4da7-81b7-622cff4632c1"
                      alt=""
                    />
                    <br />
                    <span className="shop-product3">BỘ POD SYSTEM Flexus S1</span>
                    <br />
                    <span className="shop-product4">300,000₫</span>
                  </div>
                  <div className="product-new1">
                    <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Ffelix%2Fhannya_nano_pro_white_dda581910748423891091c2da70f6897_master.webp?alt=media&token=94c42347-4e46-456a-83a7-31e767bcfa71"
                      alt=""
                    />
                    <br />
                    <span className="shop-product3">BỘ POD SYSTEM NanoPro</span>
                    <br />
                    <span className="shop-product4">350,000₫</span>
                  </div>
                  <div className="product-new1">
                    <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fcalibull%2Fcaliburn_a3_full_9327a1c9de2e426d904652880a25066e_master.webp?alt=media&token=ac38b228-2c09-4b27-9213-97704b1d655d"
                  alt=""
                    />
                    <br />
                    <span className="shop-product3">BỘ POD SYSTEM CALIBURN</span>
                    <br />
                    <span className="shop-product4">450,000₫₫</span>
                  </div>
                  <div className="product-new1">
                    <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fdot%20v2%2Fdotaio_v2_f62e66a0e60a41fab35721beef2d5ec1_master.webp?alt=media&token=e6e395ec-2dd7-4d2a-807f-ad4df342d223"
                  alt=""
                    />
                    <br />
                    <span className="shop-product3">BỘ POD SYSTEM DOTAIO</span>
                    <br />
                    <span className="shop-product4">2,800,000₫</span>
                  </div>
                  <div className="product-new1">
                    <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Forigin%2Foxva_origin_mini_kit_60w_full_color_8cc27125874c47b4a60304579f0bc650_master.jpg?alt=media&token=8d76980c-b4ad-45ba-9f54-3d4c2c623a8b"
                  alt=""
                    />
                    <br />
                    <span className="shop-product3">BỘ POD SYSTEM ORIGIN MINI</span>
                    <br />
                    <span className="shop-product4">800,000₫</span>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;

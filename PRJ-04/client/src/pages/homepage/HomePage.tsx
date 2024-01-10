import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import anh1 from "./anh1.jpg";
import "./homePage.css";
import ModalGlass from "../../commons/ModalGlass";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  const id = JSON.parse(localStorage.getItem("idUser") as any);

  const [openModal, setOpenModal] = useState(false);

  const handleShowModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Header />
      <div>
        {openModal && <ModalGlass handleCloseModal={handleCloseModal} />}{" "}
        <div>
          <Carousel interval={1000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Findex_slider_img_1.webp?alt=media&token=11f74790-c1b4-4b90-a48b-9e5f7c7cd341"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Findex_slider_img_3%20(1).webp?alt=media&token=627a87cf-859e-4cff-8a82-5c09cb24513d"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Findex_slider_img_1.webp?alt=media&token=11f74790-c1b4-4b90-a48b-9e5f7c7cd341"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="image-container">
          <img
            className="home-anh1"
            src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fvape-tricks.webp?alt=media&token=0d33a5e6-3189-4110-ab20-b7f845f18d59"
            alt=""
          />
          <img
            className="home-anh2"
            src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2F57e073efc96f705c61c8a85a68b571dc.jpeg?alt=media&token=0294fec7-0629-4f89-b1fd-aec332f4987e"
            alt=""
          />
          <img
            className="home-anh2"
            src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2FThe-Bow-Tie.webp?alt=media&token=c44a3550-3ec0-415f-a10e-c4747214118b"
            alt=""
          />
        </div>
        <div className="list-all">
          <div className="list-product">
            <div className="list-trend">
              <span className="list-hot">HOT TREND</span> <br />
              <span className="list-new">HÀNG MỚI LÊN KỆ</span>
            </div>
            <div className="list-card">
              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Frill%2Faspire_riil_x_3dd72fbd23b54c50bd639b00cc151f37_master.webp?alt=media&token=e00cac80-db5c-48fc-99c0-4b074d99c17f"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    BỘ POD SYSTEM RIIL X KIT 700mAh BY ASPIRE
                  </Card.Title>
                  <Card.Text>950,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fcalibull%2Fcaliburn_a3_full_9327a1c9de2e426d904652880a25066e_master.webp?alt=media&token=ac38b228-2c09-4b27-9213-97704b1d655d"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    BỘ POD SYSTEM CALIBURN A3 15W BY UWELL
                  </Card.Title>
                  <Card.Text>450,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fdot%20v2%2Fdotaio_v2_f62e66a0e60a41fab35721beef2d5ec1_master.webp?alt=media&token=e6e395ec-2dd7-4d2a-807f-ad4df342d223"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    BỘ POD SYSTEM DOTAIO V2 75W BY DOTMOD
                  </Card.Title>
                  <Card.Text>2,800,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Forigin%2Foxva_origin_mini_kit_60w_full_color_8cc27125874c47b4a60304579f0bc650_master.jpg?alt=media&token=8d76980c-b4ad-45ba-9f54-3d4c2c623a8b"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    BỘ POD SYSTEM ORIGIN MINI 60W 2200mAh BY OXVA
                  </Card.Title>
                  <Card.Text>800,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fdot%2Fdot_1_18c3bea07a2e476b990cf04f8947a4f5_master.webp?alt=media&token=84c8f47b-85fa-4086-86e2-8579c3e85846"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    BỘ POD SYSTEM DOT SWITCH BY DOTMOD
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Ffelix%2Faspire_flexus_stik_all_color_e0618ea5b58e4070b9a7dbb18948fc53_master.webp?alt=media&token=1c59b87b-068d-4ed3-a646-058cb46c2293"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                   BỘ POD SYSTEM FLEXUS Q KIT 700mAh BY ASPIRE
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Forion%2Forion_2_557379ab567d4641b52744eab3fd565a_master.jpg?alt=media&token=5c6f7773-fe52-4b61-b3f6-75568fd1b7a1"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    BỘ POD SYSTEM ORION 2 40W BY LVE
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fgotex%2Fgogek_s_bd48aab4061d4b35ac4d7148e166b38d_master.webp?alt=media&token=e10bc059-038b-41eb-8660-031e932b2a5e"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    BỘ POD SYSTEM GOTEK S 650mAh BY ASPIRE
                  </Card.Title>
                  <Card.Text>270,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Ffelix%2Faspire_flexus_q_1_4a09b36376b242c7a9ea2de2a89b5f7a_master.webp?alt=media&token=3cfd4b56-f95b-4da7-81b7-622cff4632c1"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    BỘ POD SYSTEM Flexus S 650mAh BY ASPIRE
                  </Card.Title>
                  <Card.Text>300,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Ffelix%2Fhannya_nano_pro_white_dda581910748423891091c2da70f6897_master.webp?alt=media&token=94c42347-4e46-456a-83a7-31e767bcfa71"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    BỘ POD SYSTEM NanoPro S 650mAh 
                  </Card.Title>
                  <Card.Text>350,000₫</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <button className="xem">Xem tất cả </button>
          </div>
        </div>
        <div className="container-pit">
          <div className="Choose-Glass">
            <span className="elementor" onClick={handleShowModal}>
              Mua Pod Dễ Dàng
            </span>
          </div>{" "}
          <br />
          <div className="FIT-BG">
            {" "}
            <span className="FIT">Tìm pod phù hợp</span>
          </div>
          <div className="container-khung">
            <div className="image-pit">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2F17f6be126452301bf2435a16f6eaf52b.jpg?alt=media&token=604ecf87-e20d-4d6d-ab76-0323f59fd347"
                alt=""
                className="image-khung"
              />
            </div>
            <div className="text-container">
              <div className="title-choose-img">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2F6558652.png?alt=media&token=e0f9d4f4-455d-412b-a870-8307d3ba76eb"
                  alt=""
                  style={{
                    width: "40px",
                    objectFit: "cover",
                    marginTop: "25px",
                  }}
                />
              </div>
              <h2 className="title-khung">Kích thước khung</h2>
              <p className="description-khung">
                Lựa chọn Kích thước POD phù hợp nhất để giúp dễ dàng sử dụng,
                thoải mái và tiện lợi cho bạn.
              </p>
            </div>
          </div>
          <div className="container-khung">
            <div className="text-container">
              <div className="title-choose-img">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2F6558664.png?alt=media&token=71401393-6e30-478d-bf0b-617c2762d984"
                  alt=""
                  style={{
                    width: "50px",
                    objectFit: "cover",
                    marginTop: "25px",
                  }}
                />
              </div>
              <h2 className="title-khung">Độ NI phù hợp</h2>
              <p className="description-khung">
                CPhần lớn những người thích chơi Pod Vape đậm vị nicotin trên toàn thế giới đều nhận định tinh dầu Salt Nic là sản phẩm tinh dầu ngon nhất. Juice Salt Nic là một loại tinh dầu nicotine mang lại cảm giác sảng khoái không thua kém cảm giác hút thuốc lá truyền thống, juice Salt Nic có thể cung cấp lượng nicotine cao hơn so với các loại tinh dầu thông thường. 
              </p>
            </div>
            <div className="image-pit">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Fbe981f4c80442e788ac942f5feacbd1a.jpg?alt=media&token=701da613-74c4-4fdd-9db5-d0031615c8a9"
                alt=""
                className="image-khung"
              />
            </div>
          </div>
        </div>
        <div className=" container-add">
          <div className="addressss">
            <div>
              <span className="elementor">Địa điểm</span>
              <br />
              <span className="FIT">HỆ THỐNG CỬA HÀNG</span>
            </div>
            <button>
              <i className="fa-solid fa-location-dot"></i> Tìm kiếm cơ sở
            </button>
          </div>
          <div className="image-add">
            <img
              className="large-image"
              src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Ftop-10-shop-thuoc-la-dien-tu-chinh-hang-uy-tin-nhat-Viet-Nam.jpg?alt=media&token=8ce95f43-c9be-480f-86e8-275ce5597bba"
              alt=""
            />
            <img
              className="small-image"
              src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Frs%3Dw_365%2Ch_365%2Ccg_true.webp?alt=media&token=d539395e-d09d-4d70-a0a5-4dc2431b77de"
              alt=""
            />
          </div>
        </div>
        <div className="container-text">
          <div>
            <div className="container-text1">
              <div className="container-text2">
                <h2>Vũ trụ truyền thông</h2>
                <p>
                  VapePro chắc không còn quá xa lạ với giới trẻ nữa. Đây
                  là kênh thông tin mua sắm và giải trí dành cho giới trẻ, là
                  “món ăn tinh thần” hằng ngày không thể thiếu của mỗi người
                  trẻ.
                </p>
                <p>
                  Được thành lập từ năm 2015, trải qua hơn 8 năm phát triển VapePro đã, đang và sẽ chiếm vị trí không thể thiếu đối với
                  các bạn trẻ. Cập nhật thông tin sản phẩm nhanh chóng và phù
                  hợp với thị hiếu của khán giả thông qua các mạng xã hội như
                  Facebook, Tiktok, Instagram, VapePro là lựa
                  chọn hàng đầu cho những ai muốn tận hưởng các bài viết, video
                  vừa mang tính giải trí mà vẫn có đầy đủ thông tin cần thiết.
                </p>
              </div>
              <div className="container-text3">
                <img src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Ffacebook-instagram-tiktok-icon_469489-861.avif?alt=media&token=56881c27-27ba-41ac-b683-31677f69cd8c" alt="heghe" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

import React, { useState } from "react";
import "./header.css";
import { Avatar, Badge } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Header = () => {
  const [username, setUserName] = useState(null) as any;
  const navigate = useNavigate();
  const optionBuy = useSelector((state: any) => state.cart);
  const totalClickNumber = optionBuy.reduce(
    (total: number, item: any) => total + item.numberBuy,
    0
  );
  const handleSignUp = () => {
    navigate("/signUp");
  };
  const id = JSON.parse(localStorage.getItem("idUser") as any);
  const loadUser = () => {
    axios
      .get(`http://localhost:8080/api/v1/user/${id}`)
      .then((res) => setUserName(res.data.data[0].userName))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadUser();
  }, []);
    const handleLogOut = () => {
      localStorage.removeItem("idUser");
      loadUser();
      window.location.href =("/");
    };
  const handleToShop = () => {
    navigate("/shop");
  };
  return (
    <div className="header">
      <div className="logo-header">
        <a href="/">
          <img
            width="65"
            height="58"
            src="https://firebasestorage.googleapis.com/v0/b/long-cce2b.appspot.com/o/abc%2Flogo.webp?alt=media&token=fcf3ac49-fdd5-4a7c-bbfe-439f63c7ded5"
            className="attachment-thumbnail size-thumbnail"
            alt=""
          ></img>
        </a>
      </div>
      <div className="menu-header">
       <p onClick={() => navigate("/")} >Trang chủ </p>
        
        <p onClick={handleToShop}>Sản phẩm</p>
        {/* <p>Hành trình tử tế</p>
        <p>Về Anna</p> */}
        <p>Blog</p>
        <p onClick={() => navigate("/orderCheck")}>Order Checking</p>
        {/* <p>Store</p> */}
      </div>
      <div className="icon-header">
        <i className="fa-solid fa-magnifying-glass"></i>
        {username != null ? (
          <p>{username}</p>
        ) : (uuuuuuughjn
          <div onClick={handleSignUp}>
            <i className="fa-solid fa-user"></i>
          </div>
        )}
        {id == null ? (
          ""
        ) : (
          <i
            className="fa-solid fa-right-from-bracket"
            onClick={handleLogOut}
          ></i>
        )}

        <a href="cart">
          <Badge count={totalClickNumber}>
            <i
              className="fa-sharp fa-solid fa-cart-shopping"
              style={{ color: "black", fontSize: "25px" }}
            ></i>
          </Badge>
        </a>
      </div>
    </div>
  );
};

export default Header;

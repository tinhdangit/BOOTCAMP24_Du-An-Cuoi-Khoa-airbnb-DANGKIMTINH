import React from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import {
  GithubFilled,
  GithubOutlined,
  GlobalOutlined,
  InsertRowAboveOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_INFO } from "redux/types/QuanlyType";
import { userLocalSevice } from "localService/localService";
import { Button } from "antd";

function HeaderComponent() {
  let userInfor = useSelector((state) => state.userReducer.userInfor);
  let dispatch = useDispatch();
  console.log("userInfor", userInfor);
  let handleLogout = () => {
    dispatch({
      type: SET_USER_INFO,
      payload: null,
    });
    userLocalSevice.removeUserInfo();
  };

  return (
    <>
      <Link to="/">
        <div className="logo" style={{ width: "25%", display: "flex" }}>
          <img
            style={{ width: "50px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ZqGbyV-rWjQBuBjYK3l05BcinCO7YoP1Xg&usqp=CAU"
          />
          <span style={{ fontWeight: "bold", color: "white" }}>airbnb</span>
        </div>
      </Link>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
        }}
      >
        <Link to="/" style={{ fontWeight: "bold", color: "white" }}>
          Nơi ở
        </Link>
        <Link to="/" style={{ fontWeight: "bold", color: "white" }}>
          Trải nghiệm
        </Link>
        <Link to="/" style={{ fontWeight: "bold", color: "white" }}>
          Trải nghiệm trực tuyến
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", width: "20%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            Đón tiếp khách
          </Link>
          <Link to="/">
            <GlobalOutlined
              style={{
                fontWeight: "bold",
                color: "white",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />
          </Link>
        </div>
        <div>
          {userInfor ? (
            <div
              style={{
                color: "black",
                backgroundColor: "white",
                width: "150px",
                height: "35px",
                borderRadius: "40px 40px 40px 40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                position: "absolute",
                right: "30px",
                top: "15px",
              }}
            >
              <Button type="text" onClick={handleLogout}>
                Đăng xuất
              </Button>{" "}
              <Link to="user">
                <GithubFilled />
              </Link>
            </div>
          ) : (
            <Link to="login">
              <div
                style={{
                  color: "black",
                  backgroundColor: "white",
                  width: "150px",
                  height: "35px",
                  borderRadius: "40px 40px 40px 40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  position: "absolute",
                  right: "30px",
                  top: "15px",
                }}
              >
                <MenuOutlined style={{ fontSize: "20px" }} />
                <InsertRowAboveOutlined style={{ fontSize: "20px" }} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;

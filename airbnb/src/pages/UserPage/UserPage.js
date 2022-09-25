import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export const UserPage = () => {
  const { iduser } = useParams();
  const userInfor = useSelector((state) => state.userReducer.userInfor.user);
  const dispatch = useDispatch();
  console.log("userInfor", userInfor);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          borderRadius: "30px 30px 29px 30px",
          border: "1px solid #71F9DA",
          width: "300px",
          textAlign: "center",
          background: "#f5f5f5",
        }}
      >
        {userInfor ? (
          <div>
            <img
              style={{ width: "250px", height: "250px" }}
              src="https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-default-avatar-image_2237213.jpg"
            />
          </div>
        ) : (
          <div>
            <img
              style={{ width: "250px", height: "250px" }}
              src={userInfor.avatar}
            />
          </div>
        )}
        <Link to="">Cập nhật ảnh đại diện</Link>
        <p>Xác minh danh tính</p>
        <p>
          Xác thực danh tính của bạn với <br />
          huy hiệu xác minh danh tính
        </p>
        <button>Nhận huy hiệu</button>
        <p>{userInfor.name} đã xác nhận</p>
        <p>{userInfor.email}</p>
      </div>
      <div>
        <h4>Xin chào, tôi là {userInfor.name}</h4>
        <p>Chỉnh sửa hồ sơ</p>
        <p>Đánh giá</p>
        <p>Đánh giá của bạn</p>
      </div>
    </div>
  );
};

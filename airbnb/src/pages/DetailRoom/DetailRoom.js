import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import { layThongTinPhongAction } from "redux/actions/getInfoAction";
import { Select, Form, DatePicker, Input } from "antd";
import "./DetailRoom.css";

import {
  CalendarOutlined,
  HomeOutlined,
  StarFilled,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import VoteRoom from "components/VoteRoom/VoteRoom";
const DetailRoom = () => {
  let { idroom } = useParams();
  const dispatch = useDispatch();
  const infoRoom = useSelector((state) => state.roomReducer.infoRoom);

  const [getRoomDay, setGetRoomDay] = useState("");
  const [payRoomDay, setPayRoomDay] = useState("");
  const [numberGuests, setNumberGuests] = useState("");
  console.log("getRoomDay", getRoomDay);
  console.log("payRoomDay", payRoomDay);
  console.log("numberGuests", numberGuests);

  useEffect(() => {
    dispatch(layThongTinPhongAction(idroom));
  }, []);

  console.log("thông tin phòng ", infoRoom);
  const [visible, setVisible] = useState(false);
  const diffDay = Date(payRoomDay - getRoomDay);
  const tinhTong = infoRoom.price * numberGuests * diffDay;
  console.log("tính tổng phòng", tinhTong);
  console.log("tính chênh leejhc ngày", diffDay);
  return (
    <div className="detail-room" style={{ display: "flex" }}>
      <div className="header-detail-room">
        <h3>{infoRoom.name}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <StarFilled />
            <p style={{ marginLeft: "10px" }}>đánh giá</p>
            <p style={{ marginLeft: "10px" }}>chủ nhà</p>
            <p style={{ marginLeft: "10px" }}>địa chỉ</p>
          </div>
          <div>
            <span style={{ marginRight: "10px" }}>Chia sẻ</span>
            <span style={{ marginRight: "20px" }}>Lưu</span>
          </div>
        </div>
      </div>
      <div className="image-detail-room" style={{ width: "50%" }}>
        <img src={infoRoom.image} />
      </div>
      <div className="body-detail-room" style={{ display: "flex" }}>
        <div className="info-room">
          <h5>Toàn bộ căn hộ {infoRoom.name}</h5>
          <p>
            {infoRoom.guests} khách {infoRoom.bedRoom} phòng ngủ
            {infoRoom.bath}
            phòng tắm
          </p>
          <hr />
          <div className="info-room-div-1">
            <div>
              <HomeOutlined />
              <h5>Toàn bộ nhà</h5>
              <p>Bạn sẽ có chung cư cao cấp cho riêng mình</p>
            </div>
          </div>
          <div className="info-room-div-2">
            <div>
              <StarOutlined />
              <h5>Vệ sinh tăng cường</h5>
              <p>
                Chủ nhà này đã cam kết thực hiện qui trình vệ sinh tăng cường 5
                bước của Airbnb. Tìm hiểu thêm
              </p>
            </div>
          </div>
          <div className="info-room-div-3">
            <div>
              <UserOutlined />
              <h5>Phong là chủ nhà siêu cấp</h5>
              <p>
                Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá
                cao và là những người cam kết mang lại quãng thời gian tuyệt vời
                cho khác
              </p>
            </div>
          </div>
          <div className="info-room-div-4">
            <CalendarOutlined />
            <p>Miễn phí thuê 48 giờ</p>
          </div>
          <hr />
          <button>Dịch sang tiếng việt</button>
          <p>{infoRoom.description}</p>
          <hr />
          <div>
            <h5>Tiện nghi</h5>
            <div>
              <div>
                <p>Bếp</p>
                <p>
                  Tivi với truyền hình cáp tiêu chuẩn -
                  {infoRoom.elevator ? "có" : "không"}
                </p>
                <p>Diều hòa nhiệt độ</p>
                <p>Lò sưởi trong nhà - {infoRoom.hotTub ? "có" : "không"}</p>
                <p>Bãi đỗ xe thu phí nằm ngoài khuôn viên </p>
              </div>
              <div>
                <p>Wifi</p>
                <p>Thang máy</p>
                <p>Sân hoặc ban công</p>
                <p>Tủ lạnh</p>
                <p>Cho phép ở dài hạn</p>
              </div>
            </div>
            <button>Hiển thị tất cả 24 tiện nghi</button>
          </div>
        </div>
        <div className="order-room" style={{ height: "500px" }}>
          <span>Giá: {infoRoom.price} vnđ/đêm</span>
          <p>đánh giá: </p>
          <p>Ngày nhận phòng</p>
          <Input
            type={"date"}
            onChange={(e) => setGetRoomDay(e.target.value)}
          />
          <p>Ngày trả phòng</p>
          <Input
            type={"date"}
            onChange={(e) => setPayRoomDay(e.target.value)}
          />
          <Form.Item label="Khách">
            <select onChange={(e) => setNumberGuests(e.target.value)}>
              <option value="1">1 khách</option>
              <option value="2">2 khách</option>
              <option value="3">3 khách</option>
              <option value="4">4 khách</option>
              <option value="5">5 khách</option>
            </select>
          </Form.Item>
          <button
            style={{
              width: "90%",
              borderRadius: "10px",
              backgroundColor: "#df5151",
              borderWidth: "0px",
              height: "35px",
            }}
          >
            Đặt phòng
          </button>
          <p>bạn vẫn chưa bị trừ tiền</p>
          <p> phí dịch vụ</p>
          <hr />
          <p>Tổng: {tinhTong} vnđ</p>
        </div>
      </div>
      <div className="comment-detail-room"></div>
      <hr />
      <VoteRoom />
    </div>
  );
};

export default DetailRoom;

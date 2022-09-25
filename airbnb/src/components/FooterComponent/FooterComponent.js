import {
  FacebookOutlined,
  GlobalOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import React from "react";

const FooterComponent = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <h6>GIỚI THIỆU</h6>
          <p>Phương pháp hoạt động của Airbnb</p>
          <p>Trang tin tức</p>
          <p>Nhà đầu tư</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
          <p>HotelTonight</p>
          <p>Airbnb for Work</p>
          <p>Nhờ có Host, mọi điều có thể</p>
          <p>Cơ hội nghề nghiệp</p>
          <p>Thư của nhà sáng lập</p>
        </div>
        <div>
          <h6> CỘNG ĐỒNG</h6>
          <p>Sự đa dạng và cảm giác thân thuộc</p>
          <p>Tiện nghi phù hợp cho người khuyết tật</p>
          <p>Đối tác liên kết Airbnb</p>
          <p>Chỗ ở cho tuyến đầu</p>
          <p>Lượt giới thiệu của khách</p>
          <p>Airbnb.org</p>
        </div>
        <div>
          <h6>ĐÓN TIẾP KHÁCH</h6>
          <p>Cho thuê nhà</p>
          <p>Tổ chức trải nghiệm trực tuyến</p>
          <p>Tổ chức trải nghiệm</p>
          <p>Đón tiếp khách có trách nhiệm</p>
          <p>Trung tâm tài nguyên</p>
          <p>Trung tâm cộng đồng</p>
        </div>
        <div>
          <h6>HỖ TRỢ</h6>
          <p>
            Biện pháp ứng phó với đại dịch COVID-19 của <br /> chúng tôi
          </p>
          <p>Trung tâm trợ giúp</p>
          <p>Các tùy chọn hủy</p>
          <p>Hỗ trợ khu dân cư</p>
          <p>Tin cậy và an toàn</p>
        </div>
      </div>

      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          © 2021 Airbnb,Inc. All rights reserved . Quyền riêng tư . Điều khoản .
          Sơ đồ trang web
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-around",
            maxWidth: "240px",
            minWidth: "220px",
          }}
        >
          <GlobalOutlined />
          <p>Tiếng Việt(VN)</p>
          <p>$ USD</p>
          <FacebookOutlined />
          <TwitterOutlined />
          <InstagramOutlined />
        </div>
      </div>
    </>
  );
};

export default FooterComponent;

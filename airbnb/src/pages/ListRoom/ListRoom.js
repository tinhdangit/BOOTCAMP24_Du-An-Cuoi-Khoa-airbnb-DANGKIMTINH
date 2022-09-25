import { layDanhSachPhong } from "apis/GpsManagerment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ListRoom = () => {
  const [listRoom, setListRoom] = useState([]);
  useEffect(() => {
    const getListRoom = async () => {
      try {
        let result = await layDanhSachPhong();
        console.log("lay api danh sách phòng", result);
        setListRoom(result);
      } catch (error) {
        return error;
      }
    };
    getListRoom();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "ffffff",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "50%" }}>
        {listRoom.map((phong, index) => (
          <div
            key={index}
            style={{ display: "flex", height: "200px", margin: "7px" }}
          >
            <hr />
            {phong ? (
              <img
                style={{ borderRadius: "10px", marginRight: "10px" }}
                src={phong.image}
              />
            ) : (
              <img
                style={{ borderRadius: "10px", marginRight: "10px" }}
                src="https://wowphoto.vn/wp-content/uploads/2018/01/11-bi-quyet-chup-anh-phong-canh-dep-va-an-tuong-cho-ban.jpg"
              />
            )}

            <div style={{ width: "600px", height: "200px" }}>
              <Link to={`/detailroom/${phong._id}`}>
                <h4
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {phong.name}
                </h4>
              </Link>
              <p style={{ color: "black", textDecorate: "none" }}>
                Số phòng tắm:{phong.bedRoom}
              </p>
              <p>giá: {phong.price}</p>
              <p
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {phong.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="map-room" style={{ width: "50%", textAlign: "end" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d88693.6684608407!2d106.61427889007491!3d10.754248607361593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1656731503189!5m2!1svi!2s"
          style={{
            width: "60%",
            height: "600px",
            border: "0",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </div>
    </div>
  );
};
export default ListRoom;

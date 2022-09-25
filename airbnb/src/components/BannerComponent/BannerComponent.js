import { layThongTinViTri } from "apis/GpsManagerment";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
const Banner = ({ thongTinViTri }) => {
  return (
    <>
      <Carousel>
        {thongTinViTri.map((viTri, index) => (
          <Carousel.Item key={index} interval={1000}>
            <img
              style={{ height: "650px" }}
              className="d-block w-100"
              src={viTri.image}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Banner;

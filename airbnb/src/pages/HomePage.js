import Banner from "components/BannerComponent/BannerComponent";
import SearchtingComponent from "components/SearchtingComponent/SearchtingComponent";
import { layThongTinViTri } from "apis/GpsManagerment";
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  //   const { thongTinViTri } = useSelector((state) => state.vitriReducer);
  const [thongTinViTri, setThongTinViTri] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // const params = {
        //   limit: 5,
        //   skip: 1,
        // };
        let result = await layThongTinViTri();
        console.log("log thử ra thông tin vị trí", result);
        setThongTinViTri(result);
      } catch (error) {
        return error;
      }
    };
    getData();
  }, []);
  return (
    <>
      <div style={{ paddingLeft: "10%" }}>
        <SearchtingComponent thongTinViTri={thongTinViTri} />
      </div>

      <Banner thongTinViTri={thongTinViTri} />
    </>
  );
};

export default HomePage;

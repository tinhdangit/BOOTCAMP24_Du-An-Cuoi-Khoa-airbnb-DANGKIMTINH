import {
  layThongTinDanhGiaPhong,
  layThongTinPhong,
  layThongTinViTri,
} from "../../apis/GpsManagerment";

export const layThongTinViTriAction = () => {
  return async (dispatch) => {
    try {
      const result = await layThongTinViTri();
      console.log(layThongTinViTri);
      dispatch({
        type: "LAY_THONG_TIN_VI_TRI",
        thongTinViTri: result,
      });
    } catch (error) {
      return error;
    }
  };
};
export const layThongTinPhongAction = (idroom) => {
  return async (dispatch) => {
    try {
      const result = await layThongTinPhong(idroom);
      // console.log("hello", result);
      dispatch({
        type: "LAY_THONG_TIN_PHONG",
        infoRoom: result,
      });
    } catch (error) {
      return error;
    }
  };
};
export const layThongTinDanhGiaPhongAction = (idroom) => {
  console.log("idroom", idroom);

  return async (dispatch) => {
    try {
      const result = await layThongTinDanhGiaPhong(idroom);

      dispatch({
        type: "LAY_THONG_TIN_DANH_GIA_PHONG",
        infoVoteRoom: result,
      });
    } catch (error) {
      return error;
    }
  };
};

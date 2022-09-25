import { LAY_THONG_TIN_VI_TRI } from "../types/QuanlyType";

let initialState = {};
export const vitriReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_THONG_TIN_VI_TRI: {
      state.thongTinViTri = action.thongTinViTri;
      return { ...state };
    }

    default:
      return state;
  }
};

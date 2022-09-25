import {
  LAY_THONG_TIN_DANH_GIA_PHONG,
  LAY_THONG_TIN_PHONG,
} from "redux/types/QuanlyType";

const initialState = { infoRoom: {}, infoVoteRoom: {} };
export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_THONG_TIN_PHONG: {
      state.infoRoom = action.infoRoom;

      return { ...state };
    }
    case LAY_THONG_TIN_DANH_GIA_PHONG: {
      // state.infoVoteRoom = action.infoVoteRoom;
      console.log(state);
      return { ...state, infoVoteRoom: action.infoVoteRoom };
    }

    default:
      return state;
  }
};

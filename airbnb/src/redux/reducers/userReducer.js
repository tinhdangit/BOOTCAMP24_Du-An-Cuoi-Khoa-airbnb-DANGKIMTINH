import { userLocalSevice } from "localService/localService";
import { SET_REGISTER_INFO, SET_USER_INFO } from "redux/types/QuanlyType";

let initialState = {
  userInfor: userLocalSevice.getUserInfo(),
  userRegister: {},
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_REGISTER_INFO: {
      state.userRegister = payload;
      return { ...state };
    }

    case SET_USER_INFO: {
      state.userInfor = payload;
      return { ...state };
    }

    default:
      return state;
  }
};

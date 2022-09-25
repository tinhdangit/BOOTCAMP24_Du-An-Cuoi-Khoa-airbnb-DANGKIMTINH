import { userLocalSevice } from "localService/localService";

const { postRegister, postLogin, getUserInfo } = require("apis/UserManager");
const { SET_REGISTER_INFO, SET_USER_INFO } = require("redux/types/QuanlyType");

export const postRegisterAction = (data) => {
  return async (dispatch) => {
    try {
      const result = await postRegister(data);
      console.log("log thử result", result);
      //   dispatch({
      //     type: SET_REGISTER_INFO,
      //     payload: result.content,
      //   });
    } catch (error) {
      return error;
    }
  };
};
export const postUserLoginAction = (data, onLogin, onFail) => {
  return async (dispatch) => {
    try {
      const result = await postLogin(data);
      console.log("check login", result);
      dispatch({
        type: SET_USER_INFO,
        payload: result,
      });
      if (result.message == "Đăng Nhập Thành Công ! ") {
        userLocalSevice.setUserInfo(result);
        onLogin();
      } else {
        onFail();
      }
    } catch (error) {
      return error;
    }
  };
};
export const getUserInfoAction = (data) => {
  return async () => {
    try {
      const result = await getUserInfo(data);
      console.log("check login", result);
    } catch (error) {
      return error;
    }
  };
};

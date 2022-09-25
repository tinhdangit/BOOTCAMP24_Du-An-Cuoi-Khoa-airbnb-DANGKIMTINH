const SET_USER_INFOR = "SET_USER_INFOR";
export const userLocalSevice = {
  setUserInfo: (data) => {
    let json = JSON.stringify(data);
    localStorage.setItem(SET_USER_INFOR, json);
  },
  getUserInfo: () => {
    let userInforJson = localStorage.getItem(SET_USER_INFOR);
    let userInfor = JSON.parse(userInforJson);
  },
  removeUserInfo: () => {
    localStorage.removeItem(SET_USER_INFOR);
  },
};

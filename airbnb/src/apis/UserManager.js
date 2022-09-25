import { axiosClient } from "./axiosConfig";

export const postRegister = async (data) => {
  try {
    return await axiosClient.post("/api/auth/register", data);
  } catch (error) {
    return error;
  }
};
export const postLogin = async (data) => {
  try {
    return await axiosClient.post("/api/auth/login", data);
  } catch (error) {
    return error;
  }
};
export const getUserInfo = async () => {
  try {
    return await axiosClient.get("/api/users/616045e8d1a292001ce8f15a");
  } catch (error) {
    return error;
  }
};
export const getListUser = async () => {
  try {
    return await axiosClient.get("/api/users/pagination");
  } catch (error) {
    return error;
  }
};
export const addUser = async (userInfor) => {
  try {
    return await axiosClient.post("/api/users", userInfor);
  } catch (error) {
    return error;
  }
};
export const deleteUser = async (userId) => {
  try {
    return await axiosClient.delete(`api/users/${userId}`);
  } catch (error) {
    return error;
  }
};
export const editUser = async (userId, userInfor) => {
  try {
    return await axiosClient.put(`api/users/${userId}`, userInfor);
  } catch (error) {
    return error;
  }
};
export const getLocation = async (userId, userInfor) => {
  try {
    return await axiosClient.get("/api/locations");
  } catch (error) {
    return error;
  }
};
export const addLocation = async (userInfor) => {
  try {
    return await axiosClient.post("/api/users", userInfor);
  } catch (error) {
    return error;
  }
};
export const deleteLocation = async (userId) => {
  try {
    return await axiosClient.delete(`api/users/${userId}`);
  } catch (error) {
    return error;
  }
};
export const editLocation = async (userId, userInfor) => {
  try {
    return await axiosClient.put(`api/users/${userId}`, userInfor);
  } catch (error) {
    return error;
  }
};

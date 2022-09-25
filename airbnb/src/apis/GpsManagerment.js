import { axiosClient } from "./axiosConfig";

export const layThongTinViTri = async (params) => {
  try {
    return await axiosClient.get("/api/locations", {
      params,
    });
  } catch (error) {
    return error;
  }
};
export const layDanhSachPhong = async () => {
  try {
    return await axiosClient.get("/api/rooms");
  } catch (error) {
    return error;
  }
};
export const layThongTinPhong = async (idroom) => {
  try {
    return await axiosClient.get(`/api/rooms/${idroom}`);
  } catch (error) {
    return error;
  }
};
export const layThongTinDanhGiaPhong = async (idroom) => {
  try {
    return await axiosClient.get(
      `/api/reviews/byRoom?roomId=61654e12dc423b001dd9c042`
    );
  } catch (error) {
    return error;
  }
};

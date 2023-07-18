import axiosInstance from "@/utils/axiosInstance";
import { API_ALL_CATEGORIES, API_ROOT_CATEGORIES } from "./apiUrl";

export const getRootCategories = async () => {
  try {
    const res = await axiosInstance.get(API_ROOT_CATEGORIES);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllCategories = async () => {
  try {
    const res = await axiosInstance.get(API_ALL_CATEGORIES);
    return res.data;
  } catch (error) {
    return [];
  }
};

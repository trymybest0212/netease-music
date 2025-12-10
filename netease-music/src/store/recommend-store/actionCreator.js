import * as actionTypes from "./constant";
import { getTopBanners } from "@/service/recommend";

export const getTopBannerActions = () => {
  return async (dispatch) => {
    try {
      const res = await getTopBanners();
      console.log(res, "1111");
    } catch (error) {
      console.log(error, "error");
    }
  };
};

import * as actionTypes from "./constant";
import { getTopBanners } from "@/service/recommend";

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: res,
});
export const getTopBannerActions = () => {
  return async (dispatch) => {
    try {
      const { banners } = (await getTopBanners()) || {};
      dispatch(changeTopBannerAction(banners));
    } catch (error) {
      console.log(error, "error");
    }
  };
};

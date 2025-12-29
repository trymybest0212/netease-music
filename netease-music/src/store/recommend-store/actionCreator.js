import * as actionTypes from "./constant";
import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
} from "@/service/recommend";

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

const changeRecommendHotAction = (res) => ({
  type: actionTypes.CHANGE_RECOMMEND_HOT,
  recommendHot: res,
});
export const getRecommendHotActions = () => {
  return async (dispatch) => {
    try {
      const { result } = (await getHotRecommend()) || {};
      dispatch(changeRecommendHotAction(result));
    } catch (error) {
      console.log(error, "error");
    }
  };
};

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: res,
});
export const getNewAlbumActions = () => {
  return async (dispatch) => {
    try {
      const { albums } = await getNewAlbum();
      dispatch(changeNewAlbumAction(albums));
    } catch (error) {}
  };
};

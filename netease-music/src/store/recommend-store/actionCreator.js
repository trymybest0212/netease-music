import * as actionTypes from "./constant";
import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
  getRecommendRank,
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

const getNewRankActions = (res) => ({
  type: actionTypes.CHANGE_NEW_RANK,
  newRank: res,
});
const getOriginRankActions = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANK,
  originRank: res,
});
const getUpRankActions = (res) => ({
  type: actionTypes.CHANGE_UP_RANK,
  upRank: res,
});
export const geRecommendRankActions = (id) => {
  return async (dispatch) => {
    try {
      const res = await getRecommendRank(id);
      switch (id) {
        case actionTypes.NEW_RANK:
          dispatch(getNewRankActions(res));
          break;
        case actionTypes.UP_RANK:
          dispatch(getUpRankActions(res));
          break;
        case actionTypes.ORIGIN_RANK:
          dispatch(getOriginRankActions(res));
          break;
      }
    } catch (error) {}
  };
};

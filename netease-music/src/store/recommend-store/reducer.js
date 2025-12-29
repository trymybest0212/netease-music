import { Map } from "immutable";

import * as actionTypes from "./constant";

const defaultState = Map({
  topBanners: [],
  recommendHot: [],
  newAlbum: [],
  newRank: {},
  upRank: {},
  originRank: {},
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      // return { ...state, topBanners: action.topBanners };
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_RECOMMEND_HOT:
      return state.set("recommendHot", action.recommendHot);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbum", action.newAlbum);
    case actionTypes.CHANGE_NEW_RANK:
      return state.set("newRank", action.newRank);
    case actionTypes.CHANGE_UP_RANK:
      return state.set("upRank", action.upRank);
    case actionTypes.CHANGE_ORIGIN_RANK:
      return state.set("originRank", action.originRank);
    default:
      return state;
  }
};

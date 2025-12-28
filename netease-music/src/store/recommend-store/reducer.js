import { Map } from "immutable";

import * as actionTypes from "./constant";

const defaultState = Map({
  topBanners: [],
  recommendHot: [],
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      // return { ...state, topBanners: action.topBanners };
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_RECOMMEND_HOT:
      return state.set("recommendHot", action.recommendHot);
    default:
      return state;
  }
};

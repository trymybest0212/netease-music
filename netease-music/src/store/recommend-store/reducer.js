import { Map } from "immutable";

import * as actionTypes from "./constant";

const defaultState = Map({
  topBanners: [],
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      // return { ...state, topBanners: action.topBanners };
      return state.set('topBanners',action.topBanners)
    default:
      return state;
  }
};

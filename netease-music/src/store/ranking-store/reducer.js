import { Map } from "immutable";

import * as actionTypes from "./constant";

const defaultState = Map({
  topList: [],
  currentIndex: 0,
  rankingDetail: {},
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      return state.set("topList", action.topList);
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.currentIndex);
    case actionTypes.CHANGE_RANKING_DETAIL:
      return state.set("rankingDetail", action.rankingDetail);
    default:
      return state;
  }
};

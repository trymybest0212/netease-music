import * as actionTypes from "./constant";

import { getTopList, getRankingDetailInfo } from "@/service/ranking";

const getTopListAction = (res = []) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res,
});
export function changeTopListAction() {
  return async (dispatch) => {
    try {
      const { list } = (await getTopList()) || {};
      dispatch(getTopListAction(list));
    } catch (error) {
      console.log(error);
    }
  };
}
export const changeCurrentIndex = (index) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex: index,
});

const getRankingDetailAction = (res) => ({
  type: actionTypes.CHANGE_RANKING_DETAIL,
  rankingDetail: res,
});
export const changeRankingDetailAction = (id) => {
  return async (dispatch) => {
    const {playlist} = await getRankingDetailInfo(id);
    dispatch(getRankingDetailAction(playlist));
  };
};

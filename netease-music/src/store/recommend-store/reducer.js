import * as actionTypes from './constant';


const defaultState = {
  topBanners: [],
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanners", action.banners);
    default:
      return state;
  }
};

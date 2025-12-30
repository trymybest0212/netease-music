import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "./recommend-store/index";
import { reducer as rankingReducer } from "./ranking-store/index";

export default combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
});

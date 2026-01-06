import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "./recommend-store/index";
import { reducer as rankingReducer } from "./ranking-store/index";
import { reducer as  songReducer } from "./song-store";
import { reducer as  albumReducer } from "./album-store";


export default combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
  songs: songReducer,
  album:albumReducer
});

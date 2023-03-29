import { Reducer, combineReducers } from "redux";
import { RootState } from "../../types";

import userReducer from "./user";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  userState: userReducer,
});

export default rootReducer;

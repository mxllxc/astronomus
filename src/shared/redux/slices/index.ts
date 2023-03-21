import { Reducer, combineReducers } from "redux";
import { RootState } from "../../types";

import contadorReducer from "../../../shared/redux/slices/contador";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  contadorState: contadorReducer,
});

export default rootReducer;

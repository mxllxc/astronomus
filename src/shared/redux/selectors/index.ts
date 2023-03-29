import { RootState } from "../../../shared/types";

export const getUser = (state: RootState) => state.userState.user;

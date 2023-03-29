import { store } from "../..";
import { User as UserDictionary } from "../utils/dictionary";

//================================================
// Envios para o back end

export type CreateUser = {
  [UserDictionary.EMAIL]: string;
  [UserDictionary.NAME]: string;
  [UserDictionary.PASSWORD]: string;
};

//================================================
// Retornos do back end
export type User = {
  [UserDictionary.ID]: string;
  [UserDictionary.EMAIL]: string;
  [UserDictionary.NAME]: string;
  [UserDictionary.PASSWORD]: string;
};

//================================================
// Helpers
export type AppDispatch = typeof store.dispatch;

//================================================
// State

export type RootState = {
  userState: UserState;
};

export type UserState = {
  user: User[];
};

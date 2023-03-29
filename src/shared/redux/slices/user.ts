import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User as UserDictionary } from "../../utils/dictionary";
import {
  getUsers as getUsersService,
  postUsers,
} from "../../../service/apiAstronomus";
import { CreateUser, User, UserState } from "../../types";

const initialState: UserState = {
  user: [
    {
      [UserDictionary.ID]: "",
      [UserDictionary.EMAIL]: "",
      [UserDictionary.NAME]: "",
      [UserDictionary.PASSWORD]: "",
    },
  ],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    // addContador: (state: UserState) => {
    //   ++state.contador.contador;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.user = action.payload;
      }
    );
  },
});

export const getUsers = createAsyncThunk<User[], void>(
  "user/getUser",
  async () => {
    const response = await getUsersService();
    return response?.data;
  }
);

// export const { addContador } = contadorSlice.actions;
export default userSlice.reducer;

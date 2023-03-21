import { createSlice } from "@reduxjs/toolkit";
import { Contador as ContadorDictionary } from "../../../shared/utils/dictionary";
import { ContadorState } from "../../types";

const initialState: ContadorState = {
  contador: {
    [ContadorDictionary.CONTADOR]: 0,
  },
};

const contadorSlice = createSlice({
  name: "contadorSlice",
  initialState,
  reducers: {
    addContador: (state: ContadorState) => {
      ++state.contador.contador;
    },
  },
});

export const { addContador } = contadorSlice.actions;
export default contadorSlice.reducer;

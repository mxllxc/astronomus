import { RootState } from "../../../shared/types";

export const getContador = (state: RootState) =>
  state.contadorState.contador.contador;

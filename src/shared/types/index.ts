import { Contador as ContadorDictionary } from "../utils/dictionary";

//================================================
// Envios para o back end

//================================================
// Retornos do back end

//================================================
// Helpers
export type Contador = {
  [ContadorDictionary.CONTADOR]: number;
};

//================================================
// State

export type RootState = {
  contadorState: ContadorState;
};

export type ContadorState = {
  contador: Contador;
};

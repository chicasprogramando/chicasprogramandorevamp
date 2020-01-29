import { isNil } from "ramda";

export const nombreRules = [
  v => !!v || "Nombre requerido",
  v => v.length <= 40 || "El nombre debe tener menos de 40 caracteres"
];
export const emailRules = [
  v => !!v || "E-mail requerido",
  v =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
    "E-mail must be valid"
];
export const campoRequeridoRules = [v => !!v || "Campo requerido"];

export const descripcionRules = [
  v =>
    (!isNil(v) && v.length <= 500) ||
    "El texto puede tener hasta 500 caracteres",
  v => !!v || "Campo requerido"
];

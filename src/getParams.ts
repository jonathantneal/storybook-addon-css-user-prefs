import { PARAM_KEY, OPTIONS } from "./constants";

export const getParams = (globals: any): Params =>
  globals[PARAM_KEY] ||
  (globals[PARAM_KEY] = Object.fromEntries(
    Object.keys(OPTIONS).map((k) => [k, false])
  ));

export type Params = Record<keyof typeof OPTIONS, boolean>;

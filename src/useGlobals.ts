import { useGlobals as useStorybookGlobals } from "@storybook/api";
import * as options from "./options";

/** Returns globals specific to this addon. */
export const useGlobals = (useGlobals = useStorybookGlobals) => {
  const [globals, updateGlobals] = useGlobals();

  const params = {} as Globals;

  let feature: keyof Globals;
  for (feature in options.features) {
    params[feature] = globals[feature];
  }

  return [params, updateGlobals] as [
    Globals,
    (options: Partial<Globals>) => void
  ];
};

export type Globals = Record<
  keyof options.Features,
  options.Features[keyof options.Features][number] | undefined
>;

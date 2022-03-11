import type { DecoratorFunction } from "@storybook/addons";
import type {
  AnyFramework,
  PartialStoryFn,
  StoryContext,
} from "@storybook/csf";
import { PARAM_KEY } from "./constants";
import { processCSS } from "./processCSS";
import { useEffect, useGlobals as useAddonGlobals } from "@storybook/addons";
import { Globals, useGlobals } from "./useGlobals";

export const withGlobals: DecoratorFunction<void> = (
  storyFn: PartialStoryFn<AnyFramework>,
  context: StoryContext<AnyFramework>
) => {
  const [globals, updateGlobals] = useGlobals(useAddonGlobals);

  // apply user parameter overrides
  const overrides = Object.assign({}, context.parameters[PARAM_KEY]) as Globals
  let feature: keyof Globals;
  for (feature in overrides) {
    if (globals[feature] === undefined && overrides[feature] !== undefined) {
      updateGlobals(overrides)
      break
    }
  }

  // transform css
  useEffect(() => {
    processCSS(document.styleSheets, globals);
  }, Object.values(globals));

  return storyFn();
};

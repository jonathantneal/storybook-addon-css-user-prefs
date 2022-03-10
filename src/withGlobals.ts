import { StoryContext } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import { getParams, Params } from "./getParams";

export const withGlobals = (storyFn: Function, context: StoryContext) => {
  const [globals, updateGlobals] = useGlobals();
  const params = getParams(globals);

  useEffect(() => {
    console.log("params");
    console.log(params);
    processCSS(document.styleSheets, params);
  }, Object.values(params));

  return storyFn();
};

const matches = {
  prefersReducedMotion: [/\(prefers-reduced-motion(: no-preference)?\)/, "all"],
} as Record<keyof Params, [RegExp, string]>;

const cache = new WeakMap<CSSRule, { conditionText: string }>();

function processCSS(containers: ArrayLike<CSSContainer>, params: Params) {
  for (const target of containers as CSSContainer[]) {
    if (target instanceof CSSMediaRule) {
      const state =
        cache.get(target) ||
        cache.set(target, { conditionText: target.conditionText }).get(target);
      let { conditionText } = state;
      for (const param in params) {
        if (param in matches) {
          const [match, replacer] = matches[param as keyof typeof matches];
          if (params[param as keyof typeof params]) {
            conditionText = conditionText.replace(match, replacer);
          }
        }
      }
      if (conditionText !== target.conditionText) {
        target.media.mediaText = conditionText;
      }
    } else if ("cssRules" in target) {
      processCSS(target.cssRules, params);
    }
  }
}

type CSSContainer = CSSStyleSheet | CSSMediaRule | CSSRule;

import { GlobalTypes } from "@storybook/csf";
import { withGlobals } from "../withGlobals";
import * as options from "../options";

export const decorators = [withGlobals];

export const globalTypes = Object.entries(options.features).reduce(
  (globalTypes: GlobalTypes, [name, value]) =>
    Object.assign(globalTypes, {
      [name]: {
        name,
        type: {
          name: "enum",
          value,
        },
      },
    } as GlobalTypes),
  {}
);

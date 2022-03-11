import type { WithTooltip } from "@storybook/components";

export type WithHideFn = Parameters<
  Extract<Parameters<typeof WithTooltip>[0]["tooltip"], Function>
>[0];

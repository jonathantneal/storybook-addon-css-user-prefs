import type { WithHideFn } from "./types";
import type { Globals } from "./useGlobals";

import React, { useCallback } from "react";
import { useGlobals } from "./useGlobals";
import { IconButton, WithTooltip } from "@storybook/components";
import { TOOL_ID } from "./constants";
import * as options from "./options";
import { TooltipList } from "./components/TooltipList";
import { Icon } from "./components/Icon";

export const Tool = () => {
  const [globals, updateGlobals] = useGlobals();

  const toggle = useCallback(
    (id: keyof Globals, value: Globals[typeof id]) =>
      updateGlobals({
        [id]: value ? value : undefined,
      }),
    Object.values(globals)
  );

  const createItems = ({ onHide }: WithHideFn) =>
    options.keys.map((id) => ({
      id,
      title: id,
      right: (
        <select
          defaultValue={globals[id]}
          onChange={(event) => {
            onHide();
            toggle(id, event.currentTarget.value);
          }}
        >
          <option value="">{options.defaultOption}</option>
          {Object.values(options.features[id]).map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ),
    }));

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={(props) => <TooltipList items={createItems(props)} />}
    >
      <IconButton key={TOOL_ID} title={options.title}>
        <Icon />
      </IconButton>
    </WithTooltip>
  );
};

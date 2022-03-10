import React, { Fragment, useCallback } from "react";
import { useGlobals } from "@storybook/api";
import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";
import { TOOL_ID, PARAM_KEY, OPTIONS } from "./constants";
import { getParams } from "./getParams";

const createLinks = (params: any) => {
  console.log({ params });
};

export const Tool = () => {
  const [globals, updateGlobals] = useGlobals();

  const params = getParams(globals);

  const toggleMyTool = useCallback(
    (id: string) =>
      updateGlobals({
        [PARAM_KEY]: { ...globals[PARAM_KEY], [id]: !globals[PARAM_KEY][id] },
      }),
    Object.values(params)
  );

  const createLinks = (onHide: () => void) =>
    Object.entries(OPTIONS).map(([id, title]) => ({
      id,
      title,
      onClick() {
        onHide();
        toggleMyTool(id);
      },
    }));

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnClick
      tooltip={({ onHide }) => <TooltipLinkList links={createLinks(onHide)} />}
    >
      <IconButton
        key={TOOL_ID}
        active={params.isActive}
        title="Enable my addon"
      >
        <Icons icon="lightning" />
      </IconButton>
    </WithTooltip>
  );
};

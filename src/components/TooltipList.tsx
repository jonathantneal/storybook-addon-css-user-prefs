import React, { FunctionComponent, useCallback, SyntheticEvent } from "react";
import { styled } from "@storybook/theming";
import ListItem, { ListItemProps } from "./List";

const List = styled.div<{}>(
  {
    minWidth: 180,
    overflow: "hidden",
    overflowY: "auto",
    maxHeight: 13.5 * 32, // 11.5 items
  },
  ({ theme }) => ({
    borderRadius: theme.appBorderRadius * 2,
  })
);

export interface ItemProps extends ListItemProps {
  id: string;
}

export interface TooltipListProps {
  items: ItemProps[];
}

const Item: FunctionComponent<TooltipListProps["items"][number]> = (props) => (
  <ListItem {...props} />
);

export const TooltipList: FunctionComponent<TooltipListProps> = ({ items }) => (
  <List>
    {items.map(({ ...p }) => (
      <Item key={p.id} {...p} />
    ))}
  </List>
);

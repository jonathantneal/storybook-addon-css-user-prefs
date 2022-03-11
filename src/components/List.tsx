import React, { FunctionComponent, ReactNode, ComponentProps } from "react";
import { styled } from "@storybook/theming";
import { transparentize } from "polished";

export interface TitleProps {}

const Title = styled((props: TitleProps) => <span {...props} />)<TitleProps>(
  ({ theme }) => ({
    color: theme.color.defaultText,
    fontWeight: theme.typography.weight.regular,
  })
);

export interface RightProps {}

const Right = styled.span<RightProps>(
  {
    "& svg": {
      transition: "all 200ms ease-out",
      opacity: 0,
      height: 12,
      width: 12,
      margin: "3px 0",
      verticalAlign: "top",
    },
    "& path": {
      fill: "inherit",
    },
  },
  () => ({})
);

const Center = styled.span({
  flex: 1,
  textAlign: "left",
  display: "inline-flex",

  "& > * + *": {
    paddingLeft: 10,
  },
});

export interface CenterTextProps {}

const CenterText = styled.span<CenterTextProps>({
  flex: 1,
  textAlign: "center",
});

export interface LeftProps {}

const Left = styled.span<LeftProps>(({ theme }) => ({}));

export interface ItemProps {}

const Item = styled.div<ItemProps>(({ theme }) => ({
  alignItems: "center",
  color: transparentize(0.5, theme.color.defaultText),
  cursor: 'default',
  display: "flex",
  fontSize: theme.typography.size.s1,
  justifyContent: "space-between",
  lineHeight: "18px",
  padding: "7px 15px",
  textDecoration: "none",
  transition: "all 150ms ease-out",

  "& > * + *": {
    paddingLeft: 10,
  },

  "&:hover": {
    background: theme.background.hoverable,
  },

  "&:hover svg": {
    opacity: 1,
  },
}));

export interface ListItemProps
  extends Omit<ComponentProps<typeof Item>, "title"> {
  loading?: boolean;
  left?: ReactNode;
  title?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

const ListItem: FunctionComponent<ListItemProps> = ({
  loading,
  left,
  title,
  center,
  right,
  ...rest
}) => (
  <Item {...rest}>
    {left && <Left>{left}</Left>}
    {title || center ? (
      <Center>
        {title && <Title>{title}</Title>}
        {center && <CenterText>{center}</CenterText>}
      </Center>
    ) : null}
    {right && <Right>{right}</Right>}
  </Item>
);

ListItem.defaultProps = {
  loading: false,
  left: null,
  title: <span>Loading state</span>,
  center: null,
  right: null,
};

export default ListItem;

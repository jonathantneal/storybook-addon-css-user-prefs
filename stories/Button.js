import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  backgroundColor,
  type,
  size,
  variant,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const className = ["storybook-button", `storybook-button--${size}`, mode];
  if (variant && variant !== "none")
    className.push(`storybook-button--${variant}`);
  return (
    <button
      type="button"
      className={className.join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Additional variants
   */
  variant: PropTypes.oneOf(["none", "pulsing"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
  variant: "none",
};

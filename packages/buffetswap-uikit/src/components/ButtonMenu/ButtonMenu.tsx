/* eslint-disable no-nested-ternary */
import React, { cloneElement, Children, ReactElement } from "react";
import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { scales, variants } from "../Button/types";
import { ButtonMenuProps } from "./types";

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: DefaultTheme;
}

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  if (variant === variants.SUBTLE) {
    return theme.colors.input;
  }
  if (variant === variants.SUBTLE_PRIMARY) {
    return theme.colors.input;
  }
  return theme.colors.tertiary;
};

const getBorder = ({ theme, variant }: StyledButtonMenuProps) => {
  if (variant === variants.SUBTLE) {
    return `1px solid ${theme.colors.inputSecondary}`;
  }
  if (variant === variants.SUBTLE_PRIMARY) {
    return `2px solid ${theme.colors.primary}`;
  }
  return `1px solid ${theme.colors.disabled}`;
};
const getColor = ({ theme, variant }: StyledButtonMenuProps) => {
  if (variant === variants.SUBTLE_PRIMARY) {
    return theme.colors.primary;
  }
  if (variant === variants.PRIMARY) {
    return theme.colors.primary;
  }
  return theme.colors.primary;
};

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  background-color: ${getBackgroundColor};
  border-radius: 28px;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  border: ${getBorder};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  & > button,
  & > a {
    flex: ${({ fullWidth }) => (fullWidth ? 1 : "auto")};
    box-shadow: "none";
  }

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }

  ${({ disabled }) => {
    if (disabled) {
      return `
        opacity: 0.5;
        box-shadow:none;
        & > button:disabled {
          background-color: transparent;
          color: ${getColor};
        }
    `;
    }
    return "";
  }}
  ${space}
`;

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButtonMenu disabled={disabled} variant={variant} fullWidth={fullWidth} {...props}>
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          variant,
          disabled,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;

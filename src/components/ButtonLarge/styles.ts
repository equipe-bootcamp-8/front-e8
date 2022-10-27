import { Theme } from "types/styled-components";
import styled, { css } from "styled-components";

interface StyledButtonProps {
  theme: Theme;
  variant?: "disabled" | "cancel" | "delete" | "cancel-blue";
}

export const ButtonLarge = styled.button<StyledButtonProps>`
  ${({ theme, variant }) => css`
    background: ${theme.colors.baseDarkBlue};
    border: none;
    color: ${theme.colors.textColor2};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    width: 150px;
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;

    ${variant === "delete" &&
    css`
      background-color: ${theme.colors.baseBgRed};
      color: ${theme.colors.baseBg1};
      border-radius: 8px;
      box-shadow: none;
    `}

    ${variant === "cancel" &&
    css`
      background-color: ${theme.colors.baseBg1};
      border-radius: 8px;
      color: ${theme.colors.textDark};
      border: 2px solid ${theme.colors.baseBgRed};
      box-shadow: none;
    `}
    ${variant === "cancel-blue" &&
    css`
      background-color: ${theme.colors.baseMainBlue};
      border-radius: 8px;
      color: ${theme.colors.textColor2};
      border: 2px solid ${theme.colors.baseBg1};
      box-shadow: none;
    `}
  `}
`;

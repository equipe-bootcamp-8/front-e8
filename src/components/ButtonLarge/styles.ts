import { Theme } from "types/styled-components";
import styled, { css } from "styled-components";

interface StyledButtonProps {
  theme: Theme;
  variant?: "disabled" | "cancel";
}

export const ButtonLarge = styled.button<StyledButtonProps>`
  ${({ theme, variant }) => css`
    background: ${theme.colors.textButtonColor};
    border: none;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 150px;
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;

    ${variant === "cancel" &&
    css`
      background-color: ${theme.colors.baseBgDark};
      color: ${theme.colors.secondaryColor};
      border: 1px solid ${theme.colors.secondaryColor};
      box-shadow: none;
    `}
  `}
`;

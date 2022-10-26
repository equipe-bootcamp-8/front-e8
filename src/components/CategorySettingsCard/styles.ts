import styled, { css } from "styled-components";

export const CategorySettingsCardContainer = styled.div`
  ${({ theme }) => css`
    background-color: #0C0E4F;
    width: 45rem;
    height: 7rem;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: ${theme.colors.textColor2};
    text-align: center;
    padding: 1rem;
    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 23rem;
      margin-right: 1rem;
      gap: .5rem;
    }
  `}
`;

export const CategorySettingsEditCardButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 80%;
    border-radius: 8px;
    background-color: ${theme.colors.bgGreen};
    border: 1px solid ${theme.colors.baseBgDark};
    color: ${theme.colors.textColor2};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `}
`;

export const CategorySettingsDeleteCardButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 80%;
    border-radius: 8px;
    background-color: #CB232C;
    color: ${theme.colors.textColor2};
    border: 1px solid #CB232C;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `}
`;
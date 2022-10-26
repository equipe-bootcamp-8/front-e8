import styled, { css } from "styled-components";

export const ProductSettingsCardContainer = styled.div`
  ${({ theme }) => css`
    background-color: #0C0E4F;
    padding: 2rem;
    width: 100%;
    height: 8rem;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: ${theme.colors.textColor2};
    text-align: center;
    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 23rem;
      padding: 1rem;
      gap: .5rem; 
    }
    img {
      width: 7rem;
      height: 7rem;
      object-fit: cover;
    }
  `}
`;

export const ProductSettingsEditCardButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 100%;
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

export const ProductSettingsDeleteCardButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 100%;
    border-radius: 8px;
    background-color: #CB232C;
    color: ${theme.colors.textColor2};
    border: 1px solid #FF3232;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `}
`;
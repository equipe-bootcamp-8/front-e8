import styled, { css } from "styled-components";

export const CategorySettingsCardContainer = styled.div`
  ${({ theme }) => css`
    background-color: #0C0E4F;
    width: 18rem;
    height: 25rem;
    border-radius: 21px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: ${theme.colors.textColor2};
    text-align: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      padding: 1rem;
      gap: .5rem; 

    }
    img {
      width: 100%;
      border-radius: 20px 20px 0px 0px;
      height: 13rem;
      object-fit: cover;
    }
  `}
`;

export const CategorySettingsEditCardButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 100%;
    border-radius: 8px;
    background-color:#3C41F5;
    border: 1px solid #3C41F5;
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
    width: 100%;
    border-radius: 8px;
    background-color: #FF3232;
    color: ${theme.colors.textColor2};
    border: 1px solid #FF3232;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `}
`;
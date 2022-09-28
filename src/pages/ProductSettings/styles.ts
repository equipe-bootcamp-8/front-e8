import styled, { css } from "styled-components";
import backgroundProduct from "../../assets/imgs/product-settingsbg.png";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    background-image: url(${backgroundProduct});
    min-width: 90%;
    min-height: 90%;
    color: ${theme.colors.textColor};
    display: flex;
    font-family: "Roboto";
  `}
`;

export const SearchInputContainer = styled.div`
  input {
    background: #2d303e;
    width: 102px;
    height: 29px;
    color: #ffffff;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    :focus {
      outline: none;
    }
  }
`;

export const EditEntitiesContainer = styled.div`
  ${() => css`
    width: 80%;
    height: 80%;
    padding: 1rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    margin-left: 2rem;
    margin-right: 2rem;
    box-sizing: border-box;
    h2 {
      margin-bottom: 2rem;
    }
  `}
`;

export const EditEntitiesButton = styled.button<ActiveButtonProps>`
  ${({ theme, active }) => css`
    height: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    background-color: ${theme.colors.baseBg2};
    margin-right: 1.5rem;
    cursor: pointer;
    :hover {
      color: ${theme.colors.textColor};
    }
    ${active &&
    css`
      color: ${theme.colors.primaryColor};
      border-bottom: 1px solid ${theme.colors.primaryColor};
    `}
  `}
`;

export const EntitiesEditList = styled.div`
  ${({ theme }) => css`
    width: 95%;
    height: 85%;
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem;
    box-sizing: border-box;
    gap: 3rem;
    overflow-y: scroll;
  `}
`;

export const AddEntitieCard = styled.div`
  ${({ theme }) => css`
    width: 13.75rem;
    height: 18.75rem;
    border-radius: 8px;
    background-color: ${theme.colors.baseDarkBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.textColor2};
    cursor: pointer;
  `}
`;

export const EntityCard = styled.div`
  ${({ theme }) => css`
    width: 13.75rem;
    height: 18.75rem;
    border-radius: 8px;
    border: 1px solid ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primaryColor};
    cursor: pointer;
  `}
`;
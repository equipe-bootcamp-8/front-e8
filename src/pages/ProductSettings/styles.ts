import styled, { css } from "styled-components";
import backgroundProduct from "../../assets/imgs/product-settingsbg.png";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    background-image: url(${backgroundProduct});
    min-width: 90vw;
    height: calc(100vh - 21vh);
    color: ${theme.colors.textColor};
    display: flex;
  `}
`;

export const Bar = styled.div`
  ${() => css`
    width: 100%;
    margin: 1rem 1rem 1rem 1rem;
    height: 0.3rem;
    background-color: #0c0e4f;
  `}
`;

export const Header = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    margin-top: 1rem;
    padding: 2rem;
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 23rem;
      padding: 1rem;
      gap: 0.5rem;
    }
  `}
`;

export const SettingsNav = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;
    margin-top: 2rem;
  `}
`;

export const SearchInputContainer = styled.div`
  border: 1px #b6b6b6 solid;
  width: 25rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1rem;
  div {
    margin: 0 0.5rem 0 1rem;
  }
  input {
    border: none;
    width: 21rem;
    margin: 0 1rem 0 1.3rem;
    outline: none;
    font-size: 1.6rem;
  }
`;

export const EditEntitiesContainer = styled.div`
  ${() => css`
    width: 80%;
    height: 77%;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    margin-left: 2rem;
    margin-right: 2rem;
    box-sizing: border-box;
  `}
`;

export const EditEntitiesButton = styled.button<ActiveButtonProps>`
  ${({ theme, active }) => css`
    height: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    background-color: ${theme.colors.baseBgDark};
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

export const EntitiesList = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem;
    box-sizing: border-box;
    gap: 1rem;
    overflow-y: scroll;
  `}
`;

export const AddEntitieCard = styled.div`
  ${({ theme }) => css`
    width: 18rem;
    height: 5rem;
    border-radius: 8px;
    background-color: ${theme.colors.baseDarkBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      color: ${theme.colors.textColor2};
    }
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

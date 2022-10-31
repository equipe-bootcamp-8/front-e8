import styled, { css } from "styled-components";
import backgroundUser from "../../assets/imgs/user-settingsbg.png";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    background-image: url(${backgroundUser});
    min-width: 100%;
    min-height: calc(100% - 72.5px);
    color: ${theme.colors.textColor};
    display: flex;
  `}
`;

export const Bar = styled.div`
  ${() => css`
    width: 100%;
    margin: 1rem 1rem 1rem 1rem;
    height: 0.3rem;
    background-color: #0C0E4F;
  `}
`;

export const EditEntityContainer = styled.div`
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
  `}
`;

export const EntityEditList = styled.form`
  ${({ theme }) => css`
    width: 95%;
    height: 85%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 1.5rem;
    box-sizing: border-box;
    gap: 3rem;
  `}
`;

export const ButtonUpload = styled.button`
  ${({ theme }) => css`
    width: 24rem;
    height: 4rem;
    background-color: rgba(12, 7, 7, 0.62);
    color: ${theme.colors.textColor};
    border: 1px solid #000000;
    font-size: 1.25rem;
    border-radius: 11px;
    cursor: pointer;
  `}
`;

export const PersonalInformations = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 5rem;
    h2 {
      margin-bottom: 1rem;
    }
    input {
      width: 20rem;
      height: 3rem;
      background: rgba(0, 0, 0, 0.32);
      border: 1px solid #000000;
      color: ${theme.colors.textColor};
      border-radius: 8px;
    }
  `}
`;

export const Buttons = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    gap: 5rem;
  `}
`;

export const SaveButton = styled.button`
  ${({ theme }) => css`
    background-color: rgba(12, 7, 7, 0.62);
    border-radius: 8px;
    width: 20rem;
    height: 3rem;
    border: 1px solid #000000;
    cursor: pointer;
    color: ${theme.colors.textColor};
    font-size: 1.25rem;
    font-weight: bold;
	transition-duration: 0.5s;
    :hover {
      background-color: #fafafa;
      color: black;
    }
  `}
`;

export const DiscardButton = styled.button`
  ${({ theme }) => css`
    border-radius: 8px;
    width: 20rem;
    height: 3rem;
    background: #035295;
    border: 1px solid #000000;
    cursor: pointer;
    color: ${theme.colors.textColor};
    font-size: 1.25rem;
	transition-duration: 0.5s;
    :hover {
      background-color: #EC4752;
      color: black;
    }
  `}
`;

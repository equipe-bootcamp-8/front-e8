import styled, { css } from "styled-components";
import backgroundUser from "../../assets/imgs/user-settingsbg.png";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    background-image: url(${backgroundUser});
    min-width: 100%;
    min-height: calc(100% - 10vh);
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10vh);
  padding: 0 20px;
  `}
`;

export const EntityEditList = styled.form`
  ${({ theme }) => css`
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  `}
`;

export const ButtonUpload = styled.button`
  ${({ theme }) => css`
    width: 24rem;
    height: 4rem;
    margin: 10px 0 10px 0;
    background-color: #0C0E4F;
    color: #fafafa;
    border: 1px #dadada;
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
      background: #e6f1ff;
      border: 1px #dadada;
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
    background-color: #fafafa;
    border-radius: 8px;
    width: 20rem;
    height: 3rem;
    border: 1px solid #000;
    cursor: pointer;
    color: ${theme.colors.textColor};
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 20px;
	transition-duration: 0.5s;
    :hover {
      background-color: #035295;
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
    border: 1px #dadada;
    cursor: pointer;
    margin-top: 20px;
    color: #fafafa;
    font-size: 1.25rem;

	transition-duration: 0.5s;
    :hover {
      background-color: #EC4752;
      color: black;
    }
  `}
`;

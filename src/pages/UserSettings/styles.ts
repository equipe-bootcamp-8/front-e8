import styled, { css } from "styled-components";
import backgroundUser from "../../assets/imgs/user-settingsbg.png";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    background-image: url(${backgroundUser});
    object-fit: fill;
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

export const UserSettings = styled.form`
  ${({ theme }) => css`
    width: 95%;
    height: 85%;
    display: flex;
    flex-direction: row;
    padding: 1.5rem;
    box-sizing: border-box;
    gap: 3rem;
  `}
`;

export const Input = styled.input`
  ${({ theme}) => css`
    all: unset;
    min-width: 30rem;
    padding: 0 1rem;
    box-sizing: border-box;
    min-height: 3rem;
    background-color: ${theme.colors.baseForm};
    border: 1px solid ${theme.colors.baseLine};
    border-radius: 8px;
    color: ${theme.colors.baseLine};
  `}
`;


export const ButtonUpload = styled.button`
  ${({ theme }) => css`
    width: 24rem;
    height: 24rem;
    background-color: rgba(12, 7, 7, 0.62);
    color: ${theme.colors.textColor2};
    border: 1px solid #000000;
    font-size: 1.8rem;
    font-weight: 400;
    border-radius: 50%;
    cursor: pointer;
  `}
`;

export const PersonalInformations = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction:  column;
    align-items: flex-start;
    width: 50%;
    gap: 3rem;
    h2 {
      margin-bottom: 1rem;
    }
    input {
      width: 40rem;
      height: 4rem;
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
    background-color: ${theme.colors.baseDarkBlue};
    border-radius: 8px;
    width: 35rem;
    height: 4rem;
    border: 1px solid #000000;
    cursor: pointer;
    color: ${theme.colors.textColor2};
    font-size: 1.8rem;
    font-weight: 200;
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
    width: 35rem;
    height: 4rem;
    background: #035295;
    border: 1px solid #000000;
    cursor: pointer;
    color: ${theme.colors.textColor2};
    font-size: 1.8rem;
    font-weight: 200;
	transition-duration: 0.5s;
    :hover {
      background-color: #EC4752;
      color: ${theme.colors.textColor2};
    }
  `}
`;

import styled, { css } from "styled-components";
import backgroundUser from "../../assets/imgs/user-settingsbg.png";

export const Bar = styled.div`
  ${() => css`
    width: 100%;
    margin: 1rem 1rem 1rem 1rem;
    height: 0.3rem;
    background-color: #0C0E4F;
  `}
`;


export const SettingsContainer = styled.div`
  ${({ theme }) => css`
  background-image: url(${backgroundUser});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
    min-width: 90vw;
    height: calc(100vh - 10vh);
    color: ${theme.colors.textColor};
    display: flex;
    overflow-y: hidden;
  `}
`;

export const UserSettings = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding: 1.5rem;
    box-sizing: border-box;
    gap: .2rem;
  `}
`;

export const Input = styled.input`
  ${({ theme}) => css`
       width: 35rem;
    
      height: 4rem;
      background: rgba(205, 209, 228, 0.55);
      border: 1px solid #d2d2d2;
      color: ${theme.colors.textColor};
      border-radius: 8px;
      @media screen and (max-width: 960px) {

  `}
`;


export const ButtonUpload = styled.button`
  ${({ theme }) => css`
    width: 24rem;
    height: 24rem;
    background: #035295;
    color: #fafafa;
    border: 1px solid #dadada;
    font-size: 1.8rem;
    font-weight: 400;
    border-radius: 50%;
    margin: 10px 0 10px 0;
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
   
    label { 
    background-color: ${theme.colors.baseDarkBlue};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35rem;
    height: 4rem;
    border: 1px solid #000000;
    cursor: pointer;
    color: ${theme.colors.textColor2};
    font-size: 1.8rem;
    font-weight: 200;
    margin-top: 20px;
	transition-duration: 0.5s;
    :hover {
      background-color: #035295;
      color: black;
    }
  }
    }

  `}
`;

export const UploadBtn = styled.input`
  ${({ theme }) => css`
display: none
  `}
`;

export const Buttons = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: .5rem;
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
    width: 35rem;
    height: 4rem;
    background: #035295;
    border: 1px #dadada;
    cursor: pointer;
    color: ${theme.colors.textColor2};
    font-size: 1.8rem;
    font-weight: 200;
    margin-top: 20px;
	transition-duration: 0.5s;
    :hover {
      background-color: #EC4752;
      color: ${theme.colors.textColor2};
    }
  `}
`;

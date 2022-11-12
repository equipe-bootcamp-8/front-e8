import styled, { css } from "styled-components";
import backgroundUpdate from "../../assets/imgs/update-settingsbg.png";
export const Bar = styled.div`
  ${() => css`
    width: 100%;
    margin: 1rem 1rem 1rem 1rem;
    height: 0.3rem;
    background-color: #0c0e4f;
  `}
`;

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
  background-image: url(${backgroundUpdate});
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


export const UpdateContainer = styled.div`
  ${() => css`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    margin-left: 2rem;
    margin-right: 2rem;
    box-sizing: border-box;
  `}
`;

export const BoardButtons = styled.div`
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

export const DownloadButton = styled.button`
  ${({ theme }) => css`
    width: 25rem;
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

export const Input = styled.input`
  ${({ theme }) => css`
    display: none;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    width: 25rem;
    height: 5rem;
    border-radius: 8px;
    background-color: #fafafa;
    color: ${theme.colors.textColor2};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    border: 2px solid ${theme.colors.baseDarkBlue};
    pointer-events: none;

    span {
      :nth-child(1) {
        max-width: 15rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: ${theme.colors.baseDarkBlue};
      }
      :nth-child(2) {
        background-color: ${theme.colors.baseDarkBlue};
        color: #fafafa;
        padding: 0.5rem 1rem;
        font-weight: 700;
        border-radius: 8px;
        cursor: pointer;
        pointer-events: all;
      }
    }
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

export const userData = styled.div`
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

export const SendButton = styled.div`
  ${({ theme }) => css`
    width: 25rem;
    height: 5rem;
    border-radius: 8px;
    background-color: ${theme.colors.baseMainBlue};
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

export const WrapperInputButton = styled.div`
  display: flex;
  gap: 5rem;
`;

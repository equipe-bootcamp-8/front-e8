import styled, { css } from "styled-components";
import backgroundMenu from "../../assets/imgs/nav-settingsbg1.png"

interface ActiveButtonProps {
	active?: boolean;
}

export const SettingsNavigationContainer = styled.div`
	${({ theme }) => css`
		width: 25%;
		height: calc(100vh - 10vh);
		border-radius: 0 2rem 0 0;
		padding: 1.5rem;
		background-image: url(${backgroundMenu}); 
		color: ${theme.colors.textColor2};
		background-repeat: no-repeat;
  		background-size: cover;
  		background-position: center;
	`}
`;


export const UserInfos = styled.div`
	${() => css`
	margin: 3rem 1rem 0 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	`}
`;


export const SettingsNavigationButtonsList = styled.div`
	${() => css`
		width: 100%;
		height: 37rem;
		box-sizing: border-box;
		margin: 1.5rem ;
		overflow: hidden;
	`}
`;

export const SettingsNavigationButtonsContainer = styled.div<ActiveButtonProps>`
	${({active, theme}) => css`
	border-radius: 1rem 0 0 1rem;
		height: 5.5rem;
		width: 100%;
		margin-top: 1.5rem;
		padding: 1.5rem 0;
		padding-left: 3rem;
		box-sizing: border-box;
		h2 { 
			font-size: 20px;
		}
		${active &&
    css`
      background-color: ${theme.colors.baseBg1};
	  color: ${theme.colors.textBoxColor};
    `}
	`}
`;

export const SettingsNavigationButtonSelected = styled.div<ActiveButtonProps>`
	${({theme, active}) => css`
		width: 100%;
		height: 100%;
		cursor: pointer;
		h2	{ 
			font-weight: 900;
		}
	`}
`;
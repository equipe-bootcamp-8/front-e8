import styled, { css } from "styled-components";
import backgroundMenu from "../../assets/imgs/nav-settings.png"

interface ActiveButtonProps {
	active?: boolean;
}

export const SettingsNavigationContainer = styled.div`
	${() => css`
		width: 15%;
		height: 100%;
		padding: 1.5rem;
		background-image: url(${backgroundMenu}); 
	`}
`;

export const SettingsNavigationButtonsList = styled.div`
	${() => css`
		width: 100%;
		height: 45.188rem;
		box-sizing: border-box;
		margin: 1.5rem ;
		overflow: hidden;
	`}
`;

export const SettingsNavigationButtonsContainer = styled.div<ActiveButtonProps>`
	${({active}) => css`
		height: 5.5rem;
		width: 100%;
		padding: 1.5rem 0;
		padding-left: 3rem;
		box-sizing: border-box;
		h2 { 
			font-size: 20px;
		}
		${active &&
    css`
      background-color: #035295;
    `}
	`}
`;

export const SettingsNavigationButtonSelected = styled.div<ActiveButtonProps>`
	${({theme, active}) => css`
		width: 100%;
		height: 100%;
		cursor: pointer;
	`}
`;
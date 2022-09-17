import styled, { css } from "styled-components";


export const SettingsContainer = styled.div`
	${({ theme }) => css`
		background-color: #035295;
		min-width: 80%;
		min-height: 80%;
		color: ${theme.colors.textColor2};
		display:flex;
		
	`}
`;

export const Container = styled.div`
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
		div { 
			display: flex;
			flex-direction: column;
			gap: 2rem;
			h1 {
				font-size: 40px;
			}
			p {
				font-size: 30px;
				width: 25%;
			}
		}
		img { 
			width: 80%;
			top: 2;
		}
	`}
`;




import styled, { css } from "styled-components";
import backgroundSettings from "../../assets/imgs/settings-bg.png"


export const SettingsContainer = styled.div`
	${() => css`
		background-image: url(${backgroundSettings}); 
		min-width: 80%;
		min-height: 80%;
		display:flex;
	`}
`;

export const Container = styled.div`
	${() => css`
		width: 80%;
		height: 100vh;
		padding: 1rem;
		margin-top: 10rem;
		margin-bottom: 1.5rem;
		border-radius: 8px;
		margin-left: 2rem;
		box-sizing: border-box;
		div { 
			display: flex;
			flex-direction: row;
			justify-content: baseline;
			h1 {
				font-size: 50px;
				width: 50rem;
			}
			p {
				margin-top: 2rem;
				font-size: 30px;
				width: 40rem;
			}
		}
		img { 
			width: 40%;
		}
	`}
`;




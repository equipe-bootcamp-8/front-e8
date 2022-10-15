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

export const Bar = styled.div`
  ${() => css`
    width: 20%;
    margin: 1rem 1rem 1rem 1rem;
    height: 0.3rem;
    background-color: #3C41F5;
  `}
`;

export const Container = styled.div`
	${() => css`
		width: 80%;
		height: calc(100vh - 10vh);
		padding: 12rem;
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
				margin-top: 4rem;
				font-size: 30px;
				width: 40rem;
			}
		}
		img { 
			width: 40%;
		}
	`}
`;




import styled, { css } from "styled-components";
import backgroundSettings from "../../assets/imgs/settings-bg.png"


export const SettingsContainer = styled.div`
	${() => css`
		background-image: url(${backgroundSettings}); 
		background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
		min-width: 80%;
		min-height: calc(100vh - 72.5px);
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
		padding: 1rem;
		margin-top: 10rem;
		margin-bottom: 1.5rem;
		height: calc(100vh - 10vh);
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




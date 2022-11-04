import styled, { css } from "styled-components";

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
		margin: 10rem 0 1.5rem 2rem;
		border-radius: 8px;
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




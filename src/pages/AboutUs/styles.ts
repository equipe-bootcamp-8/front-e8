import styled, { css } from "styled-components";
import  headerbg from "assets/imgs/about-us-header.png"

export const AboutUs = styled.div`
	${({ theme }) => css`
        background-color: ${theme.colors.baseBg1};
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8rem;
	`}
`;

export const Header = styled.div`
	${({ theme }) => css`
        background-image: url(${headerbg});
        background-color: ${theme.colors.baseBg1};
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        div {
            margin-bottom: 25rem;
        }
        h1 {
            font-weight: 300;
            color: ${theme.colors.textColor2};
        }
        img {
            width: 50rem;
            height: 50rem;
        }
        
	`}
`;

export const TextBox = styled.div`
	${({ theme }) => css`
        margin-left: 15rem;
        width: 80rem;
        justify-content: center;
        h1 {
            font-size: 4rem;
        }
        p { 
            font-size: 3rem;
        }
        div { 
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
	`}
`;

export const MiddleTextBox = styled.div`
	${({ theme }) => css`
     background-color: ${theme.colors.baseMainBlue};
     
        justify-content: center;
        h1 {
            font-size: 4rem;
        }
        p { 
            font-size: 3rem;
            font-weight: 200;
        }
        div { 
            color: ${theme.colors.textColor2};
            display: flex;
            margin-left: 15rem;
            flex-direction: column;
            gap: 2rem;
            width: 80rem;     
            margin-bottom: 3rem;
            margin-top: 3rem;  
            
        }
	`}
`;

export const TechIcons = styled.div`
	${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
       svg { 
        width: 10rem;
        height: 10rem;
       }
	`}
`;

export const TeamCards = styled.div`
	${({ theme }) => css`
     display: flex;
     flex-direction: column;
     gap: 6rem;
    h1 {
        margin-left: 15rem;
    }
	`}
`;

export const MemberCard = styled.div`
	${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    margin-left: 20rem;
    h2 {
            font-size: 3rem;
        }
	`}
`;

export const MemberPhoto = styled.div`
	${({ theme }) => css`
    width: 25rem;
    height: 27rem;
img {
    border-radius: 0px 75px;
    width: 25rem;
    height: 30rem;
    object-fit: cover;
}
	`}
`;

export const MemberDetails = styled.div`
	${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 28rem;
    height: 27rem;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1rem 0;
    section {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        a { 
            height: 4rem;
        width: 4rem;
            color : #181616;
           
        }
    }
	`}
`;

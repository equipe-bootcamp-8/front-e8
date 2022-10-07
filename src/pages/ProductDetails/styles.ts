import styled, { css } from "styled-components";
import backgroundDetails from "../../assets/imgs/product-detailsbg.png";


export const DetailsContainer = styled.div`
	${({ theme }) => css`
        background-image: url(${backgroundDetails}); 
        img {
            width: 5rem;
            height: 5rem;
        }
	`}
`;
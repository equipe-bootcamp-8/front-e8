import styled from "styled-components";
import bglogin from "../../assets/imgs/bglogin.png"

export const Background = styled.div`
  background-image: url(${bglogin});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10vh);
`;

import styled from "styled-components";

export const NavBarContainer = styled.div`
  height: 10vh;
  background: #3c41f5;
`;

export const NavBarLink = styled.div` 
  display: flex;
  align-items: center;
  gap: 3rem;
`;


export const NavBarRegister = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;

  div {
    margin: 0.7rem;
  }

  a {
    margin: 0.4rem;
    color: #fafafa;

    p {
      margin: 0;
      color: #fafafa;
    }
  }
`;

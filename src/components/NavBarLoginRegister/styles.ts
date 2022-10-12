import styled from "styled-components";

export const NavBarContainer = styled.div`
  height: 8vh;
  background: #3c41f5;
`;

export const NavBarRegister = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;

  div {
    margin: 0.7rem 2rem;
  }

  a {
    margin: 2rem 1rem;
    text-decoration: none;
    color: #fafafa;

    p {
      margin: 0;
      color: #fafafa;
    }
  }
`;

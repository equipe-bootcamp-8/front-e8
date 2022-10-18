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

export const SingUp = styled.div`
  cursor: pointer;
  background-color: white;
  border-radius: 0.5rem;
  padding: 4px 16px;
  p {
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #3c41f5;
    font-size: 15px;
    letter-spacing: calc(-0.009px + var(--text-tracking-pos, 0) * 15px);
    margin-bottom: 2px;
  }
`;

export const Links = styled.div`
  color: white;
  cursor: pointer;
`
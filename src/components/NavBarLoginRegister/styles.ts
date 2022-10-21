import styled from "styled-components";

interface OpenProps {
	open?: boolean;
}


export const Container = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #3C41F5;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  p {
    &:nth-child(2) {
      color: #f2f2f2;
    }
    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      color: #f2f2f2;
    }
  }
  svg {
    fill: #f2f2f2;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul<OpenProps>`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 960px) {
    background-color: #3C41F5;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")}; 
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: ce;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #f2f2f2;
  font-family: sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    background-color: 	
    hsla(238, 47%, 47%, 0.486);
    transition: 0.5s all ease;
    div {
      svg {
        fill: #f2f2f2;
      }
    }
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #f2f2f2;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    div {
      width: 30%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #f2f2f2;
      margin-right: 0.5rem;
    }
  }
`;
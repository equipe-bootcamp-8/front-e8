import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface NavContainerProps {
    extendNavbar: boolean;
  };


export const NavbarContainer = styled.nav<NavContainerProps> `
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: #3C41F5;
    display: flex;
    flex-direction: column;

  @media (min-width: 700px) {
    height: 60px;
  }
`;

export const LeftContainer = styled.div `
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`   

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const RightContainer = styled.div `
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`

export const NavbarExtendedContainer = styled.div `
    width: 100%;
    height: 70px;
    display: flex;
`

export const NavbarLinkContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavbarLink = styled(Link) `
    color: #fafafa;
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px) {
    display: none;
}
`

export const NavbarLinkExtended = styled(Link)`
  color: #fafafa;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;
  
    @media (min-width: 700px) {
    display: none;
  }
`;


export const NavbarInnerContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
  
    @media (min-width: 700px) {
    display: none;
  }
`
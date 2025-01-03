
import styled from "styled-components";
import HeaderLink from "../HeaderLink/HeaderLink";
import './NavBar.css'

const NavContainer = styled.nav`
  display: flex;
  gap: 1em;
  justify-content: center;

  @media (max-width : 600px){
    display: none;
  }
`;

export default function NavBar() {

   

  return (
    <>
      <NavContainer>
        <li className="list__container">
          <HeaderLink url="./">Home</HeaderLink>
        </li>
        <li className="list__container">
          <HeaderLink url="./nuevo-video">Nuevo video</HeaderLink>
        </li>
      </NavContainer>
    </>
  );
}

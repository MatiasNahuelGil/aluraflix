import styled from "styled-components";
import logo from "../../assets/logo.png";
import { IoIosHome } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import HeaderLink from "../Header/HeaderLink/HeaderLink";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: var(--black);
  padding: 1em;
  border-top: 2px solid var(--blue);

  @media (max-width: 600px) {
    position: sticky;
    bottom: 0;
  }
`;

const FooterNavIcons = styled.nav`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    font-size: 29px;
    border-radius: 10px;
    justify-content: space-evenly;
    align-items: center;
    width: 30%;
    color: white;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <img src={logo} alt="logo de aluraflix" />
        <FooterNavIcons>
          <HeaderLink url="/">
            <IoIosHome />
          </HeaderLink>
          <HeaderLink url="/nuevo-video">
            <IoIosAddCircle />
          </HeaderLink>
        </FooterNavIcons>
      </FooterContainer>
    </>
  );
}

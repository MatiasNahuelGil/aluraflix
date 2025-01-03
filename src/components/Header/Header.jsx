import styled from 'styled-components';
import logo from '../../assets/logo.png';
import NavBar from './NavBar/NavBar';

const HeaderContainer = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: var(--gray);
  border-bottom: 2px solid var(--blue);

  @media (max-width : 600px){
    position: initial;
  }

`

export default function Header(){
    return(
        <>
           <HeaderContainer>
               <img src={logo} alt="logo de aluraflix" />
               <NavBar/>
           </HeaderContainer>
        </>
    )
}
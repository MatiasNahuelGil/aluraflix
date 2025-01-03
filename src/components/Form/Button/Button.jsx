import styled from "styled-components"

const ButtonContainer = styled.button`
  padding: 0.8em;
  width: 100px;
  background: none;
  border-radius: 10px;
  color: var(--white);
  cursor: pointer;
  border: 2px solid var(--border-gray);
  &:hover{
     border-color: var(--blue);
  } 
`


export default function Button({children}){
  return(
    <>
      <ButtonContainer>
         {children}
      </ButtonContainer>
    </>
  )
}
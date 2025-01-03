import styled from "styled-components"

const ButtonVideoContainer = styled.button`
  display: flex;
  margin-top: 0;
  align-items: center;
  padding: 12px;
  background: none;
  border: none;
  color: var(--white);
  cursor: pointer;
`

export default function ButtonVideo({children}){
    return(
        <>
          <ButtonVideoContainer>
              {children}
          </ButtonVideoContainer>
        </>
    )
}
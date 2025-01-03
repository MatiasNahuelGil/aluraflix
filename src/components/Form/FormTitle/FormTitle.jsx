import styled from "styled-components";

const FormTitleContainer = styled.div`
  text-align: center;
  h2 {
    font-size: 52px;
  }

  @media (max-width: 450px){
    h2{
      font-size: 32px;
    }
  }
`;

export default function FormTitle({ mainTitle, children }) {
  return (
    <>
      <FormTitleContainer>
        <h2>{mainTitle}</h2>
        {children}
      </FormTitleContainer>
    </>
  );
}

import styled from "styled-components";
import Form from "../../components/Form/Form";
import FormTitle from "../../components/Form/FormTitle/FormTitle";
import { useAppContext } from "../../context/ContextVideos";

const FormVideoSection = styled.section`
  display: flex;
  padding: 2em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-form);
  color: var(--white);
  gap: 1.5em;
`;

export default function FormVideos() {
  const { addVideo, teams } = useAppContext();

  return (
    <>
      <FormVideoSection>
        <FormTitle mainTitle="NUEVO VIDEO">
          <p>Complete el formulario para crear una nueva tarjeta de video</p>
        </FormTitle>
        <Form addVideo={addVideo} teams={teams} />
      </FormVideoSection>
    </>
  );
}

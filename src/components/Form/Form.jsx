import styled from "styled-components";
import Field from './Field/Field';
import FieldArea from './FieldArea/FieldArea';
import OptionList from './OptionList/OptionList';
import Button from './Button/Button';
import { useState } from "react";

const FormContainer = styled.form`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 1em;

  h3 {
    padding: 1em;
    width: 100%;
    border-top: 1px solid var(--border-gray);
    border-bottom: 1px solid var(--border-gray);
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 650px) {
    li {
      flex-direction: column;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1em;
  margin-top: 1em;
  text-align: center;
`;

export default function Form({ addVideo, teams }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleClickSendForm = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");

    let sendVideo = {
      title,
      team,
      image,
      videoURL: video,
      description,
    };

    addVideo(sendVideo);

    console.log("Video añadido:", sendVideo);

    // Mostrar mensaje de éxito y limpiar el formulario
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000); // Ocultar el mensaje después de 3 segundos
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setCategory("");
    setImage("");
    setTeam("");
    setVideo("");
    setDescription("");
  };

  return (
    <>
      <FormContainer onSubmit={handleClickSendForm}>
        <h3>Crear Tarjeta</h3>
        <li>
          <Field
            labelName="Título"
            value={title}
            setValue={setTitle}
            placeholder="Ingrese el título"
          />
          <OptionList
            teams={teams}
            value={team}
            setValue={setTeam}
            labelName="Categoría"
          />
        </li>
        <li>
          <Field
            labelName="Video"
            value={video}
            setValue={setVideo}
            placeholder="Link del video"
          />
        </li>
        <li>
          <FieldArea
            labelName="Descripción"
            value={description}
            setValue={setDescription}
            placeholder="¿De qué se trata este vídeo?"
          />
        </li>
        <ButtonsContainer>
          <Button>Guardar</Button>
        </ButtonsContainer>
        {successMessage && (
          <SuccessMessage>El video se ha enviado de forma correcta</SuccessMessage>
        )}
      </FormContainer>
    </>
  );
}

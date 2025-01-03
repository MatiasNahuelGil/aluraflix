import styled from "styled-components";
import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background: var(--blue);
  padding: 20px;
  border-radius: 10px;
  border: 2px solid var(--white);
  gap: 15px;
  text-align: center;
  color: var(--white)
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border : none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--white);
`;


const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  border: none;
`

const ButtonSave = styled.button`
  width: 50%;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  transition: all .5s ease;
  &:hover{
    background-color: var(--black);
    color: var(--white);
  }
`

export default function ModalForm({ isOpen, onClose, formData, onInputChange, onSave }) {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={onClose}><TiDeleteOutline/></CloseButton>
        <label>
          Nombre del Video:
          <Input
            type="text"
            name="name"
            value={""}
            onChange={onInputChange}
          />
        </label>
        <label>
          Editar URL del video:
          <Input
            type="text"
            name="videoURL"
            value={""}
            onChange={onInputChange}
          />
        </label>
        <ButtonSave onClick={onSave}>Guardar Cambios</ButtonSave>
      </ModalContainer>
    </ModalBackground>
  );
}

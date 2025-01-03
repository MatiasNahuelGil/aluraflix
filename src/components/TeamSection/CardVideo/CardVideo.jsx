import React, { useState } from "react";
import ButtonVideo from "../ButtonVideo/ButtonVideo";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import styled from "styled-components";
import ModalForm from "../../ModalForm/ModalForm";

const CardContainer = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: #30b9f8;
    border-radius: 10px;
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    margin: 5px 0;
    background-color: var(--white);
    border-radius: 10px;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  min-width: 350px;
  border-radius: 10px;
  border: 2px solid ${({ color }) => color};
`;

const EditContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: var(--black);
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 200px;
  border: none;
`;



export default function CardVideo({ team, videosData, deleteVideo, updateVideo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [formData, setFormData] = useState({ name: "", videoURL: "" });

  const openModal = (video) => {
    setSelectedVideo(video);
    setFormData({ name: video.name, videoURL: video.videoURL });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    setFormData({ name: "", videoURL: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (updateVideo && selectedVideo) {
      // Actualizar el video con nuevos datos
      updateVideo(selectedVideo.id, formData);
    }
    closeModal();
  };

  return (
    <>
      <CardContainer>
        {videosData.map((video, index) => (
          <VideoContainer key={index} color={team.primaryColor}>
            <VideoFrame src={video.videoURL} title={video.name}></VideoFrame>
            <EditContainer>
              <ButtonVideo>
                Borrar <MdDeleteForever onClick={() => deleteVideo(video.id)} />
              </ButtonVideo>
              <ButtonVideo>
                Editar <AiFillEdit onClick={() => openModal(video)} />
              </ButtonVideo>
            </EditContainer>
          </VideoContainer>
        ))}
      </CardContainer>

      {isModalOpen && (
        <ModalForm
        isOpen={isModalOpen}
        onClose={closeModal}
        formData={formData}
        onInputChange={handleInputChange}
        onSave={handleSave}
      />
      )}
    </>
  );
}

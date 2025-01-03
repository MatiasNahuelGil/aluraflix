import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Recuperar datos de localStorage al cargar
  const storedTeams = JSON.parse(localStorage.getItem("teams")) || [
    {
      id: uuid(),
      title: "Programación",
      primaryColor: "#57C278",
    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor: "#82CFFA",
    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor: "#A6D157",
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: "#E06B69",
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
    },
    {
      id: uuid(),
      title: "Móvil",
      primaryColor: "#FFBA05",
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
    },
  ];

  const storedVideos = JSON.parse(localStorage.getItem("videos")) || [
    {
      id: uuid(),
      team: "Front End",
      videoURL: "https://www.youtube.com/embed/59TU5iAd174?si=1aA6-0SSu4hhHBie",
      name: "Harland Lohora",
    },
    {
        id: uuid(),   
        team: "Front End",
        videoURL: "https://www.youtube.com/embed/RLZ7-ZfkwOE?si=SzuA_wdT3dTHIWDw",
        name: "Jeanmarie Quijada",
      },
      {
        id: uuid(),   
        team: "Front End",
        videoURL: "https://www.youtube.com/embed/h6kCbWt6rzc?si=O4aQl0GanjJpuLDq",
        name: "Jeanmarie Quijada",
      },
      
      {
        id: uuid(),   
        team: "UX y Diseño",
        videoURL: "https://www.youtube.com/embed/-hq-rOK8iWM?si=y3cYwD0dcVsciBzA",
        name: "Jeanmarie Quijada",
      },
      {
        id: uuid(),   
        team: "UX y Diseño",
        videoURL: "https://www.youtube.com/embed/SSe00ZjqITc?si=sR3cy_5dcf9S989j",
        name: "Jeanmarie Quijada",
      },
      {
        id: uuid(),   
        team: "UX y Diseño",
        videoURL: "https://www.youtube.com/embed/l9WNVMnddWU?si=rfX-HZ2VcbxW7nqn",
        name: "Jeanmarie Quijada",
      },
      
      {
        id: uuid(),
        team: "Programación",
        videoURL: "https://www.youtube.com/embed/Z024LSCMqFk?si=-7mtuFqQLpF97ugZ",
        name: "Christian Velasco",
        
      },
      {
        id: uuid(),
        team: "Programación",
        videoURL: "https://www.youtube.com/embed/Z024LSCMqFk?si=-7mtuFqQLpF97ugZ",
        name: "Christian Velasco",
        
      },
      {
        id: uuid(),
        team: "Programación",
        videoURL: "https://www.youtube.com/embed/Z024LSCMqFk?si=-7mtuFqQLpF97ugZ",
        name: "Christian Velasco",
        
      },
      {
        id: uuid(),
        team: "Programación",
        videoURL: "https://www.youtube.com/embed/Z024LSCMqFk?si=-7mtuFqQLpF97ugZ",
        name: "Christian Velasco",
        
      },
      {
        id: uuid(),
        team: "Innovación y Gestión",
        videoURL: "https://www.youtube.com/embed/eejIHbOk_uI?si=lLn22cwXZpI0Fc2t",
        name: "Jose Gonzalez",
       
      },
      {
        id: uuid(),
        team: "Innovación y Gestión",
        videoURL: "https://www.youtube.com/embed/VaMblB4I3Lc?si=DJQVMEHMS-RgKRFE",
        name: "Jose Gonzalez",
       
      },
      {
        id: uuid(),
        team: "Innovación y Gestión",
        videoURL: "https://www.youtube.com/embed/4tSTmTSYaJ8?si=PTFvLUwiarW8n_eX",
        name: "Jose Gonzalez",
      },
      {
        id: uuid(),
        team: "Innovación y Gestión",
        videoURL: "https://www.youtube.com/embed/EluBc6vH88Q?si=9mhZAH9V3gehpKAZ",
        name: "Jose Gonzalez",
       
      }
  ];

  const [teams, setTeams] = useState(storedTeams);
  const [videos, setVideos] = useState(storedVideos);

  // Guardar datos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  // Funciones de manejo de datos
  const addTeam = (team) => {
    setTeams([...teams, { ...team, id: uuid() }]);
  };

  const deleteTeam = (id) => {
    setTeams((prevTeams) => prevTeams.filter((team) => team.id !== id));
  };

  const updateTeam = (id, updatedData) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) => (team.id === id ? { ...team, ...updatedData } : team))
    );
  };

  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: uuid() }]);
  };

  const deleteVideo = (id) => {
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  };

  const updateVideo = (id, updatedData) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === id ? { ...video, ...updatedData } : video
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        teams,
        videos,
        addTeam,
        deleteTeam,
        updateTeam,
        addVideo,
        deleteVideo,
        updateVideo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

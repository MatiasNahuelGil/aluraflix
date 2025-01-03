import styled from "styled-components";
import Banner from "../../components/Banner/Banner";
import TeamSection from "../../components/TeamSection/TeamSection";
import { useAppContext } from "../../context/ContextVideos";

const MainContainer = styled.main`
  background-color: var(--gray-form);
`;

export default function Home() {
  const {
    teams: teamData,
    videos: videosData,
    addVideo,
    deleteVideo,
    updateVideo,
  } = useAppContext();

  return (
    <>
      <Banner
        title="Challenge React"
        description="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
      />
      <MainContainer>
        <TeamSection
          teamData={teamData}
          videosData={videosData}
          deleteVideo={deleteVideo}
          updateVideo={updateVideo}
        />
      </MainContainer>
    </>
  );
}

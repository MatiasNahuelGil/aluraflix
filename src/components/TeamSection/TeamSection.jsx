import styled from "styled-components";
import CardVideo from "./CardVideo/CardVideo";

const TeamContainer = styled.section`
  display: flex;
  gap: 10px;
  flex-direction: column;
  background-color: var(--border-color);
  padding: 2em;
`;

const TeamName = styled.div`
  padding: 0.8em 2em;
  text-align: center;
  border-radius: 10px;
  width: 200px;
  color: var(--white);
`;

export default function TeamSection({ teamData, videosData,deleteVideo,updateVideo }) {
  return (
    <>
      {teamData.map((team) => {
        const filteredVideos = videosData.filter(video => video.team === team.title);

        if (filteredVideos.length > 0) {
          return (
            <TeamContainer key={team.id}>
              <TeamName style={{ backgroundColor: team.primaryColor }}>
                {team.title}
              </TeamName>
              <CardVideo team={team} videosData={filteredVideos} deleteVideo={deleteVideo} updateVideo={updateVideo}/>
            </TeamContainer>
          );
        }

        return null; 
      })}
    </>
  );
}

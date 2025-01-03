import styled from "styled-components";
import imagePortada from "../../assets/player.png"

const BannerContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4em 0em;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width : 1020px){
    flex-direction: column;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width:  60%;
    height: 250px;
    border-radius: 10px;
    
  }

  

  
  @media (max-width : 600px){
    display: none;
  }  
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 2em;
  width: 40%;
  h2 {
    color: var(--white);
  }
  p {
    color: #d2d4d6;
  }
  @media (max-width : 1020px){
    width: 70%;
    text-align: center;
  }
`;

export default function Banner({ title, description }) {
  return (
    <>
      <BannerContainer
        style={{ backgroundImage: `url("/backgroundBanner.png")` }}
      >
        <InfoContainer>
          <h2>{title}</h2>
          <p>{description}</p>
        </InfoContainer>
        <VideoContainer>
          <img
            src={imagePortada}
            alt="imagen de la portada"
          />
        </VideoContainer>
      </BannerContainer>
    </>
  );
}

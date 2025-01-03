import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BasePage from "./pages/BasePage/BasePage";
import FormVideos from "./pages/FormVideos/FormVideos";


export default function AppRoutes({teamData,videosData,deleteVideo,addVideo, updateVideo}) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasePage/>}>
            <Route index path="/" 
            element={<Home  
            teamData={teamData} 
            videosData={videosData} 
            deleteVideo={deleteVideo}
            addVideo={addVideo}
            updateVideo={updateVideo}
            />}/>
            <Route path="/nuevo-video" element={<FormVideos  teams={teamData}/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

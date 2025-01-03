import "./App.css";
import { AppProvider } from "./context/ContextVideos";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </>
  );
}

export default App;

import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { portfolioData } from "./data/data.js";

function App() {
  return (
    <>
      <MainLayout portfolioData={portfolioData} />
    </>
  );
}

export default App;

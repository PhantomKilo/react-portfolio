import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";

import NavBar from "./Nav";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import ProjectPage from "../ProjectPage/ProjectPage";

function App() {
  return (
    <div bg="dark">
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route
            exact
            path="/projects"
            element={<ProjectPage />}
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

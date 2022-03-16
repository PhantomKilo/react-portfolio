import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";
// import Space from "./Background/31393.jpg"

import NavBar from "./Nav";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import ProjectPage from "../ProjectPage/ProjectPage";
import Contact from "../Contact/Contact";

function App() {
  return (
    <Container className="App">
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
          <Route exact path="contact" element={<Contact />} />
        </Routes>
      </Container>
    </Container>
  );
}

export default App;

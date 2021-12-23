import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar className="nav-bar" bg="white" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link" style={{textDecoration: "none"}}>
            <span className="nav-text">Kyles Portfolio</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/projects">
              <span className="nav-text">Projects</span>
            </Link>
            <Link className="nav-link" to="/about">
              <span className="nav-text">About App</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

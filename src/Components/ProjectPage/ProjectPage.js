import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DailyDriver from "./Images/DailyDriver.png";

const ProjectPage = () => {
  return (
    <Container>
      <Row>
        <h1>Projects</h1>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card>
            <a href="https://phantomkilo.github.io/react-tank-api/#/tank/home">
              <Card.Img
                variant="top"
                className="img-fluid"
                src="https://preview.redd.it/398xbbucu8a71.jpg?width=960&crop=smart&auto=webp&s=116cd792f7de001217219fe35ed1e4c8e4cf5c90"
              />
              <Card.Title>AFV API / General AFV Info</Card.Title>
              <Card.Body>
                <h3>***Work in Progress***</h3>
                <h3>Sample Project 1</h3>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <Card.Title>Project Descrition</Card.Title>
            <Card.Body>
              <ul>
                <li>Built with React.js front-end, Express.js back-end</li>
                <li>Describes basic armored vehicle stats</li>
                <li>General armored warfare info</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card>
            <a href="https://phantomkilo.github.io/react-project/">
              <Card.Img
                variant="top"
                className="img-fluid"
                src="https://blog.hubspot.com/hubfs/image8-2.jpg"
              />
              <Card.Title>Book API</Card.Title>
              <Card.Body>
                <h3>***Work in Progress***</h3>
                <h3>Sample Project 2</h3>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <Card.Title>Project Description</Card.Title>
            <Card.Body>
              <ul>
                <li>Built with React.js front-end</li>
                <li>Uses google book API to search for books</li>
                <li>*** No back-end database to save list currently ***</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card>
            <a href="https://pages.git.generalassemb.ly/Undefined/Daily-Driver-Client/">
              <Card.Img variant="top" className="img-fluid" src={DailyDriver} />
              <Card.Title>Daily Driver Team Project</Card.Title>
              <Card.Body>
                <h3>***Code Clean-up in Progress***</h3>
                <h3>Sample Team Project</h3>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <Card.Title>Contributions to Team Project</Card.Title>
            <Card.Body>
              <ul>
                <li>Built initial React App and Routes</li>
                <li>Integrated Express back-end with React front-end</li>
                <li></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectPage;

//https://pages.git.generalassemb.ly/Undefined/Daily-Driver-Client/

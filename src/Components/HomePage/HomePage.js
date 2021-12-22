import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./HomePage.css"

const HomePage = () => {
return(
    <Container>
    <Row>
      <h1>Kyle's Portfolio</h1>
    </Row>
    <Row>
      <Col sm={12} md={6}>
        <Card>
          <a href="https://phantomkilo.github.io/react-tank-api/#/tank/home">
            <Card.Img variant="top" className="img-fluid" src="https://preview.redd.it/398xbbucu8a71.jpg?width=960&crop=smart&auto=webp&s=116cd792f7de001217219fe35ed1e4c8e4cf5c90" />
            <Card.Title>Tank API / General Tank Info</Card.Title>
            <Card.Body>***Work in Progress***</Card.Body>
          </a>
        </Card>
      </Col>
      <Col sm={12} md={6}>
        <Card>
          <a href="https://phantomkilo.github.io/react-project/">
            <Card.Img variant="top" className="img-fluid" src="https://blog.hubspot.com/hubfs/image8-2.jpg" />
            <Card.Title>Book API</Card.Title>
            <Card.Body>***Work in Progress***</Card.Body>
          </a>
        </Card>
      </Col>
    </Row>
  </Container>
)
};

export default HomePage;

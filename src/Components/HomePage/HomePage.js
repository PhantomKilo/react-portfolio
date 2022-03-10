import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Kyle's Portfolio</h1>
        </Col>
        <Col>
          <h2>Sample Projects</h2>
        </Col>
      </Row>
     <Row>
       <Col>
        <Card>
          <Card.Title></Card.Title>
          <Card.Body></Card.Body>
        </Card>
        <Card>
          <Card.Title></Card.Title>
          <Card.Body></Card.Body>
        </Card>
       </Col>
     </Row>
    </Container>
  );
};

export default HomePage;

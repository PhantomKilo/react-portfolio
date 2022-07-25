import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Me from "./Me.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col md={6} sm={12}>
          <Card className="background" >
            <Card.Title className="title">My Portfolio</Card.Title>
            <Card.Body className="subTitle">Former soldier, now software developer.</Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card>
            <Card.Img src={Me} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

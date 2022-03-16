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
          <Card className="background" >
            <Card.Title className="title">My Portfolio</Card.Title>
            <Card.Body className="subTitle">Former soldier, now software developer.</Card.Body>
          </Card>
        </Col>
        {/* <Col sm={12} md={6}>
          <Card className="background">
            <Card.Title></Card.Title>
            <Card.Body></Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
};

export default HomePage;

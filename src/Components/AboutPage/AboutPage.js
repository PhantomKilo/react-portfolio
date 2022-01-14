import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const AboutPage = () => {
  return (
    <Container>
      <h1>About Kyle</h1>
      <Row>
        <Col>
          <Card>
            <Card.Title>Who am I?</Card.Title>
            <Card.Body>
              <p>
                Born in Florida, raised in Arizona. Joining the Army to crew the
                M1 Abrams after highschool taught me to be able to work under
                pressure and give much attention to detail in tasks that need to
                get done. I was able to take both of those qualities into my 
                programming journey, helping me learn the skills needed to become
                a professional software developer. 
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default AboutPage;

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
              <Card.Text>
                Born in Florida, raised in Arizona. Joining the Army after high
                school, I had to learn certain skills first hand under less than
                favorable conditions. My job, crewing tanks, involved working
                working very close on small crews, and having to coodinate with
                other crews and sections. The challenges we had to overcome,
                while unique to the military, prepared me for working in a
                developer environment. Clear communication, teamwork,
                integration of resources from other teams and achieving an
                overarching goal. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>My Programming Journey</Card.Title>
            <Card.Body>
              <Card.Text>
                Seeing as how there aren't too many tanks outside of the
                military, I needed to find something else to make a career out
                of. Coding was a natural follow, seeing as how most of my side
                projects while in the Army involved building things or messing
                around with my pc. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Title>Skills</Card.Title>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>ReactJS</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                  <li>Node.js</li>
                  <li>Git</li>
                  <li>Github</li>
                  <li>.Net Core</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title></Card.Title>
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;

// Born in Florida, raised in Arizona. Joining the Army to crew the
// M1 Abrams after highschool taught me to be able to work under
// pressure and give much attention to detail in tasks that need to
// get done. I was able to take both of those qualities into my
// programming journey, helping me learn the skills needed to become
// a professional software developer.

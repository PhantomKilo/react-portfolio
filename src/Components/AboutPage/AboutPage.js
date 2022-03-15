import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DevIcon from "devicon-react-svg";

const AboutPage = () => {  
  return (
    <Container>
      <h1>About Kyle</h1>
      <Row>
        <Col sm={12} md={6}>
          <Card className="background">
            <Card.Title>Who am I?</Card.Title>
            <Card.Body>
              <Card.Text>
                Born in Florida, raised in Arizona. Not knowing what career to
                pursue following high school, I joined the Army to crew tanks.
                The Army quickly instills the value of having to work as a team
                to solve complex problems, usually under extreme duress. My unit
                was moved around Ft. Hood for different missions every few
                monthes, requiring the ability to quickly adapt to new
                requirements. While the military isn't where I saw myself
                retiring from, the experience has been invaluable to taking the
                next step into the tech field, primarily coding. Skills like
                teamwork, adaptability, communication and working under duress
                make solving any problems or learning any techical skill much
                more natural, having already pivoted under real world
                conditions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="background">
            <Card.Title>Post Army</Card.Title>
            <Card.Body>
              <Card.Text>
                Seeing as how there aren't too many tanks outside of the
                military, I needed to find something else to make a career out
                of. Coding grabbed my attention, being that it involved solving
                complex prblems and building projects, things I enjoyed. My Army
                exerience allowed me to approach learning and problem solving
                from a unique angle, having had to execute in real world
                scenarios prior to even touching code. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card className="background">
            <Card.Title>Personal Interests</Card.Title>
            <Card.Body>
              <ul>
                <li>Reading, primarily sci-fi and military sci-fi</li>
                <li>History, most of it</li>
                <li>Fitness, focused mostly on powerlifting, but also jogging and other general areas</li>
                <li>Wargaming, Flames of War</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={3}>
          <Card className="background">
            <Card.Title>Hard Skills</Card.Title>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React.js</li>
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
        <Col sm={6} md={3}>
          <Card className="background">
            <Card.Title>Soft Skills</Card.Title>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Ability to work as part of a team</li>
                  <li>Able to solve complex problems</li>
                  <li>Communication</li>
                  <li>Can function in high stress environment</li>
                </ul>
              </Card.Text>
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

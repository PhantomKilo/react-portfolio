import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import DevIcon from "devicon-react-svg";
import "./AboutPage.css";

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
                <li>
                  Reading, mostly sci-fi, but I enjoy pretty much any genre
                </li>
                <li>Learning history, espcially military history during the 19th century</li>
                <li>
                  Fitness, focused on powerlifting right now, but also enjoy
                  running and general movement
                </li>
                <li>Wargaming, Flames of War being th last one I focused on</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="background">
            <Card.Title>Hard Skills</Card.Title>
            <Row>
              <Col sm={12} md={6}>
                <Card className="background">
                  <Card.Body>
                    <Card.Text>
                      <ul className="about-list">
                        <li className="about">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                            alt="HTML5"
                            className="about-img"
                          />
                          <spacer type="horizontal" width="20">
                            {" "}
                          </spacer>
                          HTML5
                        </li>
                        <li className="about">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                            alt="CSS3"
                            className="about-img"
                          />
                          <spacer> </spacer>CSS3
                        </li>
                        <li className="about">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                            alt="Javascript"
                            className="about-img"
                          />
                          <spacer> </spacer>Javascript
                        </li>
                        <li className="about">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="React.js"
                            className="about-img"
                          />
                          <spacer> </spacer>React.js
                        </li>
                        <li className="about">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                            alt="Bootstrap"
                            className="about-img"
                          />
                          <spacer> </spacer>Bootstrap
                        </li>
                        <li className="about">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                            alt="MongoDB"
                            className="about-img"
                          />
                          <spacer> </spacer>MongoDB
                        </li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6}>
                <Card className="background">
                  <Card.Body>
                    <Card.Text>
                      <ul className="about-list">
                        <li className="about">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                            alt="Express.js"
                            className="about-img"
                          />
                          <spacer> </spacer>Express.js
                        </li>
                        <li className="about">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                            className="about-img"
                          />
                          <spacer> </spacer>Node.js
                        </li>
                        <li className="about">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            alt="Git"
                            className="about-img"
                          />
                          <spacer> </spacer>Git
                        </li>
                        <li className="about">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="Github"
                            className="about-img"
                          />
                          <spacer> </spacer>Github
                        </li>
                        <li className="about">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"
                            alt="C#"
                            className="about-img"
                          />
                          <spacer> </spacer>C#
                        </li>
                        <li className="about">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
                            alt=".Net Core"
                            className="about-img"
                          />
                          <spacer> </spacer>.Net Core
                        </li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
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

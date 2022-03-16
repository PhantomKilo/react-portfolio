import Stack from "react-bootstrap/Stack";
import "./Contact.css";

const Contact = () => {
  return (
    <Stack gap={5}>
      <div>
        <a href="https://www.linkedin.com/in/kyle-petersen-8b2363a4/" className="contact">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="contact-img"
          />
          LinkedIn
        </a>
      </div>
      <div>
        <a href="https://github.com/PhantomKilo" className="contact">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Github"
            className="contact-img"
          />
          Github
        </a>
      </div>
      <div>
        <p className="contact">Email - Phantom-Kilo@live.com</p>
      </div>
    </Stack>
  );
};

export default Contact;

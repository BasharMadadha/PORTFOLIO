import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
import { Icon } from "@iconify/react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

export default function Skills() {
  const { theme } = useAppContext();
  const skillData = [
    {
      id: 1,
      skill: <Icon icon="mdi:language-html5" className="display-4" />,
      name: "HTML5",
    },
    {
      id: 2,
      skill: <Icon icon="ion:logo-css3" className="display-4" />,
      name: "CSS3",
    },
    {
      id: 3,
      skill: <Icon icon="fa6-brands:js" className="display-4" />,
      name: "JavaScript",
    },
    {
      id: 4,
      skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
      name: "BootStrap",
    },
    {
      id: 5,
      skill: <Icon icon="mdi:react" className="display-4" />,
      name: "React",
    },
    {
      id: 6,
      skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
      name: "Styled Components",
    },
    {
      id: 7,
      skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
      name: "Redux",
    },
    {
      id: 8,
      skill: <Icon icon="bi:git" className="display-4" />,
      name: "Git",
    },
    {
      id: 9,
      skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
      name: "GitHub",
    },
  ];

  const resume =
    "https://www.canva.com/design/DAFtsfcnwnA/bgDi7uRZDhVz1dlpPORBgw/view?utm_content=DAFtsfcnwnA&utm_campaign=designshare&utm_medium=link&utm_source=viewer";

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Skills</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            {skillData.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
}

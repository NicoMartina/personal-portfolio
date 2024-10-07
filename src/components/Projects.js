import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

export const Projects = () => {
    const projects = [
        {
            title: "Todo List App",
            description: "A great Todo app using React and Redux",
            imgUrl: projImg1,
        },
        {
            title: "A weather App",
            description: "A simple todo list app using React and Redux",
            imgUrl: projImg2,
        },
        {
            title: "A Vet Locator App",
            description: "An awesome app that will locate the best Vet nearest you. Built with Python.",
            imgUrl: projImg3,
        },
    ]
  return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Some incredible projects that will blow your mind!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">JS/TS/React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Python</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">.NET</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard  key={index}{...project}/>
     
                                )
                                })      
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard  key={index}{...project}/>
                                )
                                })      
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard  key={index}{...project}/>
                                )
                                })      
                            }
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt={'backround img'} />
    </section>
  )
}

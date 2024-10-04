import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
    const projects = [
        {
            title: "Todo List App",
            description: "A simple todo list app using React and Redux",
            imgUrl: "todo-list.png",
        },
        {
            title: "A weather App",
            description: "A simple todo list app using React and Redux",
            imgUrl: "todo-list.png",
        },
        {
            title: "A Vet Locator App",
            description: "A simple todo list app using React and Redux",
            imgUrl: "todo-list.png",
        },
    ]
  return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Some increadible projects that will blow your mind!</p>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <p>{project.title}</p>
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
                                        <p>{project.title}</p>
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
                                        <ProjectCard  key={index}{...projects}/>
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

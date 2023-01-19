import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import lacane from "../../Assets/Projects/lacane.png";
import coder from "../../Assets/Projects/coder.png";

function Projects() {
    return (
        <Container fluid className = "project-section">
            <Particle />
            <Container>
                <h1 className = "project-heading">
                    My Recent <strong className = "purple">Works</strong>
                </h1>
                <p style = {{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style = {{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md = { 4 } className = "project-card">
                        <ProjectCard
                            imgPath = { lacane }
                            isBlog = { false }
                            title = "Lacané"
                            description ="Website, developed in group, of virtual store Lacané for final project of the Full-Stack Developer of the Government of the Ciudad de Buenos Aires, build with HTML, CSS and JavaScript."
                            ghLink="https://github.com/nehuenortega/Lacane"
                            demoLink="https://nehuenortega.github.io/Lacane/index.html"
                        />
                    </Col>

                    <Col md = { 4 } className = "project-card">
                        <ProjectCard
                            imgPath = { ecommerce }
                            isBlog = { false }
                            title = "E-Commerce Backend"
                            description ="E-Commerce Backend Project for Backend Developer Course of Coderhouse. Deployed in Heroku, is build with Handlebars, Express.js, Node.js."
                            ghLink="https://github.com/nehuenortega/Coderhouse-Backend/tree/main/Entrega_17"
                            demoLink="https://web-production-53d8.up.railway.app/api/usuario/login"
                        />
                    </Col>

                    <Col md = { 4 } className = "project-card">
                        <ProjectCard
                            imgPath = { coder }
                            isBlog = { false }
                            title = "Backend Coderhouse Course"
                            description ="All practices for Backend Developer Course of Coderhouse. The Road Map include Node.js, Express.js, Middlewares, MySQL, CRUD with MongoDB, Mongoose, Global & Child Process, Mocks, NVM, API REST."
                            ghLink="https://github.com/nehuenortega/Coderhouse-Backend"
                            demoLink=""
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
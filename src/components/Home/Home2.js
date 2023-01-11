import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    //AiFillInstragram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className = "home-about-section" id = "about">
            <Container>
                <Row>
                    <Col md = {8} className = "home-about-description">
                        <h1 style = {{ fontSize: "2.6em" }}>
                            LET ME <span className = "purple">INTRODUCE </span>MYSELF
                        </h1>
                        <p className = "home-about-body">
                            I've been in manufacturing for over 10 years. 
                            <i>
                                <b className = "purple"> The last 7 in Coca Cola as
                                Team Leader.</b>
                            </i> 
                            <br />
                            <br />I've always loved technology and programming. Trained in Low and High Level 
                            languages, I seek to integrate projects to continue developing myself.
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className = "purple"> C, JavaScript and starting with Python.</b>
                            </i>
                            <br />
                            <br />
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className = "purple">Web Technologies and Products </b> and
                                also in areas related to {" "}
                                <b className = "purple">
                                    Deep Learning and Natural Language Processing.
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with <b className = "purple">Node.js</b> and
                            <i>
                                <b className = "purple">
                                    {" "}
                                    Modern JavaScript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className = "puprle"> React.js and Vue.js</b>
                            </i>
                        </p>
                    </Col>
                    <Col md = { 4 } className = "myAvatar">
                        <Tilt>
                            <img src = { myImg } className = "img-fluid" alt = "avatar"/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md = { 12 } className = "home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className = "purple">connect </span>with me
                        </p>
                        <ul className = "home-about-social-links">
                            <li className = "social-icons"> {/*Github*/}
                                <a
                                    href = ""
                                    target = "_blank"
                                    rel = "noreferrer"
                                    className = "icon-colour home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            
                            <li className = "social-icons"> {/*Twitter*/}
                                <a
                                    href = ""
                                    target = "_blank"
                                    rel = "noreferrer"
                                    className = "icon-colour home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>

                            <li className = "social-icons"> {/*Linkedin*/}
                                <a
                                    href = ""
                                    target = "_blank"
                                    rel = "noreferrer"
                                    className = "icon-colour home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            
                            {/* <li className = "social-icons"> {/*Instragram*
                                <a
                                    href = ""
                                    target = "_blank"
                                    rel = "noreferrer"
                                    className = "icon-colour home-social-icons"
                                >
                                    <AiFillInstragram />
                                </a>
                            </li> */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
    MdPets,
} from "react-icons/md";

function Softskill() {
    return (
        <Card className = "quote-card-view">
            <Card.Body>
                <blockquote className = "blockquote mb-0">
                    <p style = {{ textAlign: "justify" }}>
                        While working as a <span className = "purple">Team Leader at Coca-Cola</span>
                        , I developed various soft skill such as:  
                    </p>
                    <Row style = {{ justifyContent: "center", paddingBottom: "50px" }}>
                        <Col>
                            <ul>
                                <li className="about-activity">
                                    <MdPets /> Communication.
                                </li>
                                <li className="about-activity">
                                    <MdPets /> Teamwork.
                                </li>
                                <li className="about-activity">
                                    <MdPets /> Problem-Solving.
                                </li>
                                <li className="about-activity">
                                    <MdPets /> Time Management.
                                </li>
                                <li className="about-activity">
                                    <MdPets /> Critical Thinking.
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li className="about-activity">
                                    <MdPets /> Decision-Making.
                                </li>
                                <li className="about-activity">
                                    <MdPets /> Adaptability.
                                </li>
                                <li className="about-activity">
                                    <MdPets /> Stress Management.
                                </li>
                                <li className="about-activity">
                                    <MdPets /> Conflict Management.
                                </li>
                                <li className="about-activity">
                                    <MdPets /> Leadership.
                                </li>   
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li className="about-activity">
                                    <MdPets /> Creativity.
                                </li>
                                <li className="about-activity">
                                    <MdPets /> Resourcefulness.
                                </li>
                                <li className="about-activity">
                                    <MdPets /> Stress Management.
                                </li>
                                <li className="about-activity">
                                    <MdPets /> Agile Decision Maker.
                                </li>
                                <li className="about-activity">
                                    <MdPets /> Proactive.
                                </li>
                            </ul>
                        </Col>
                </Row>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default Softskill;
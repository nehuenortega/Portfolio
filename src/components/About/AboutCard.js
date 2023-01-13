import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className = "quote-card-view">
            <Card.Body>
                <blockquote className = "blockquote mb-0">
                    <p style = {{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className = "purple">Nehuen Ortega </span>
                        from <span className = "purple">Buenos Aires, Argentina.</span>
                        <br />I am an Electronic Technician, engineering student.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className = "about-activity">
                            <ImPointRight /> Playing Games.
                        </li>
                        <li className = "about-activity">
                            <ImPointRight /> Reading Comics.
                        </li>
                        <li className = "about-activity">
                            <ImPointRight /> Training.
                        </li>
                        <li className = "about-activity">
                            <ImPointRight /> Travelling.
                        </li>
                    </ul>

                    <p style = {{ color: "rgb(155 126 172" }}>
                        "The More I Learn I Realize The Less I Know."{" "}
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );   
}

export default AboutCard;
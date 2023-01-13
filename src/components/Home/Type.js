import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options = {{
                strings: [
                    "Fullstack Developer",
                    "Team Leader",
                    "Engineering Student",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
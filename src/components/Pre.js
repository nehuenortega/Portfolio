import React from "react";

function Pre (props) {
    return <div id = { props.load ? "preloader" : "preloadre-none" }></div>;
};

export default Pre;
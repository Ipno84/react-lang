import App from "./App";
import React from "react";
import { render } from "react-dom";

const targetNode = document.getElementById("root");

if (targetNode) {
    render(<App />, targetNode);
}

/**
 * External
 */
// @flow
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppHome } from "./appHome.jsx"

const appElement = document.getElementById("app");
if (appElement != null && React != null) {
    ReactDOM.render(<AppHome message={"dsd4 message"}/>, appElement);
}

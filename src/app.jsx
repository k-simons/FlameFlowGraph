/**
 * External
 */
import * as React from "react";
import * as ReactDOM from "react-dom";

const appElement = document.getElementById("app");
if (appElement != null && React != null) {
    ReactDOM.render(<div>hello</div>, appElement);
}

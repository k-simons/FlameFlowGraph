/**
 * External
 */
// @flow
import * as React from "react";
import { CytoscapeGraph } from "./cytoscapeGraph.jsx"

type AppHomeProps = {
    message: string
};

export class AppHome extends React.Component {

    props: AppHomeProps;

    render() {
        return <CytoscapeGraph/>
    }

}
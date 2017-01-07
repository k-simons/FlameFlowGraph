/**
 * External
 */
// @flow
import * as React from "react";
import { CytoscapeGraph } from "./cytoscapeGraph.jsx"
import { GraphHeader } from "./graphHeader.jsx"

type AppHomeProps = {
    message: string
};

export class AppHome extends React.Component {

    props: AppHomeProps;

    render() {
        return (
            <div className="flex-vertical app-home">
                <GraphHeader/>
                <CytoscapeGraph/>
            </div>
        )
    }

}
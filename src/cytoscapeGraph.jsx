/**
 * External
 */
// @flow
import * as React from "react";
import cytoscape from 'cytoscape'
import { Edge, Node } from "./graphUtils"

type CytoscapeGraphProps = {
    
};

export class CytoscapeGraph extends React.Component {

    props: CytoscapeGraphProps;

    render() {
        return <div className="graph-body" id="graph-body"/>
    }

    componentDidMount() {
        const cy = cytoscape({
            container: document.getElementById('graph-body'),
            elements: getElements(),
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': 'red',
                        'width': 10,
                        'height': 40
                    }
                }
            ]
        });
    }

}

function getElements() {
    const rawData = getNodes().concat(getEdges())
    return rawData.map(rawDatum => {
        return {
            data: rawDatum
        }
    })
}

function getNodes(): Array<Node> {
    return [
        {
            id: 'a'
        },
        {
            id: 'b'
        },
    ]
}

function getEdges(): Array<Edge> {
    return [
        {
            id: 'ab',
            source: 'a',
            target: 'b',
        }
    ]
}
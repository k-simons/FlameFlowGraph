/**
 * External
 */
// @flow
import * as React from "react";
import cytoscape from 'cytoscape'
import cydagre from 'cytoscape-dagre';
import dagre from 'dagre';
import { generateNodes } from "./graphUtils"

type CytoscapeGraphProps = {

};

export class CytoscapeGraph extends React.Component {

    props: CytoscapeGraphProps;

    render() {
        return <div className="graph-body" id="graph-body"/>
    }

    componentDidMount() {
        cydagre( cytoscape, dagre )
        const cy = cytoscape({
            container: document.getElementById('graph-body'),
            elements: getElements(),
            layout: {
				name: 'dagre'
			},
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': 'red',
                        'content': 'data(name)',
                        'text-valign': 'center',
                        'width': 'data(size)',
                        "font-size": getFontSize,
                        'height': 'data(size)',
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 10,
                        'target-arrow-shape': 'triangle',
                        'line-color': '#9dbaea',
                        'target-arrow-color': '#9dbaea',
                        'curve-style': 'bezier'
                    }
                }
            ]
        });
    }
}

function getFontSize(e) {
    return (e.data().size / 15)
}

function getElements() {
    const rawData = generateNodes()
    return rawData.map(rawDatum => {
        return {
            data: rawDatum
        }
    })
}

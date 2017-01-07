// @flow
import { EXAMPLE } from "./example"
import * as _ from "lodash";

export type Node = {
    id: string;
    name: string;
    size: number;
};

export type Edge = {
    id: string;
    target: string;
    source: string;
};

type Sample = {
    path: Array<string>;
    timeTaken: number;
};

type FullGraph = {
    nodes: Array<Node>;
    edges: Array<Edge>;
}

export function generateNodes() {
    const cutoff = 20;
    const graph = generateAllNodes()
    const nodesRemoved = {}
    const nodes = graph.nodes.filter(node => {
        const stillInGraph = node.size > cutoff;
        if (!stillInGraph) {
            nodesRemoved[node.id] = true;
        }
        return stillInGraph;
    })
    const edges = graph.edges.filter(edge => {
        const removed = _.has(nodesRemoved, edge.source) || _.has(nodesRemoved, edge.target)
        return !removed;
    })
    return nodes.concat(edges)
}

function generateAllNodes(): FullGraph {
    const samples = generateSamples();
    const nodesSeen = {}
    const edgesSeen = {};
    const edges: Array<Edge> = [];
    const nodes: Array<Node> = [];
    for (const sample of samples) {
        for (let i = 0; i < sample.path.length; i++) {
            const path = sample.path[i];
            if (!_.has(nodesSeen, path)) {
                nodesSeen[path] = 1;
            }
            if (i > 0) {
                const currentFunctionCall = sample.path[i];
                const functionCallBelow = sample.path[i - 1];
                const id = functionCallBelow + currentFunctionCall;
                if (!_.has(edgesSeen, id)) {
                    edges.push({
                        id: functionCallBelow + currentFunctionCall,
                        target: currentFunctionCall,
                        source: functionCallBelow,
                    })
                } else {
                    console.log("found dupe")
                }
            }
        }
        const functionName = sample.path[sample.path.length - 1]
        nodesSeen[functionName] = nodesSeen[functionName] + sample.timeTaken
    }
    for (const key of _.keys(nodesSeen)) {
        nodes.push({
            id: key,
            name: key,
            size: nodesSeen[key]
        })
    }
    // console.log(edges.length)
    // console.log(edges)
    // console.log(finalNodes.length)
    // console.log(finalNodes)
    return { edges, nodes }
}

function generateSamples(): Array<Sample> {
    const input = EXAMPLE;
    return input.map(i => {
        const [path, timeTaken] = i.split(" ")
        const paths = path.split(";")
        const timeInt = parseInt(timeTaken)
        return (
            {
                path: paths,
                timeTaken: timeInt,
            }
        );
    })
}
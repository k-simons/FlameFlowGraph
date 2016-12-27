// @flow
import { EXAMPLE } from "./example"
import * as _ from "lodash";

export type Node = {
    id: string;
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


export function generateNodes() {
    const samples = generateSamples();
    const nodesSeen = {}
    const edgesSeen = {};
    const edges: Array<Edge> = [];
    const finalNodes: Array<Node> = [];
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
        finalNodes.push({
            id: key,
            size: nodesSeen[key]
        })
    }
    console.log(edges.length)
    console.log(edges)
    console.log(finalNodes.length)
    console.log(finalNodes)
    return finalNodes.concat(edges)
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
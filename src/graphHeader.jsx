/**
 * External
 */
// @flow
import * as React from "react";

type GraphHeaderProps = {

};

export class GraphHeader extends React.Component {

    props: GraphHeaderProps;

    render() {
        return (
            <div className="graph-header">
                <div>Sample Threshold</div>
                <input/>
            </div>
        )
    }

}
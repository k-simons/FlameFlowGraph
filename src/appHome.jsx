/**
 * External
 */
// @flow
import * as React from "react";

type AppHomeProps = {
    message: string
};

export class AppHome extends React.Component {

    props: AppHomeProps;

    render() {
        return <div>{this.props.message}</div>
    }

}
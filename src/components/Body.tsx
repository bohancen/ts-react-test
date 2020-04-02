import * as React from "react";

export interface BodyProps { compiler: string; framework: string; }

export class Body extends React.Component<BodyProps, {}> {
    render() {
        return <h1>Body from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
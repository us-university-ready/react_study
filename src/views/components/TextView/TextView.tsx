import * as React from "react";
import { versions, arch } from "process";

export interface TextViewProps { compiler: string; framework: string; library: string; }

export class TextView extends React.Component<TextViewProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework} and {this.props.library}!</h1>;
    }
}

export default TextView;
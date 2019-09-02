import * as React from "react";
import { versions, arch } from "process";

export interface SampleProps { compiler: string; framework: string; library: string; }

export class Sample extends React.Component<SampleProps, {}> {
    constructor(props: SampleProps) {
        super(props);
        props.compiler = `Node ${versions.node}`;
        props.framework = `${versions.v8}`;
        props.library = `${versions.modules}`;
    }
    
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework} and {this.props.library}!</h1>;
    }
}

export default Sample;
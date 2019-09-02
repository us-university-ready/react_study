import * as React from "react";
import * as ReactDOM from "react-dom";

import TextView from "./TextView";

ReactDOM.hydrate(
    <TextView compiler="TypeScript" framework="Express" library="React" />,
    document.getElementById("counter")
);
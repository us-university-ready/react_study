import * as express from 'express';
import * as React from 'react';
import { versions } from "process";
import { renderToString, version } from 'react-dom/server';

import html from '../views/pages/test/html';
import Counter from '../views/components/Counter/Counter';
import TextView from '../views/components/TextView/TextView';

export default (req: express.Request, res: express.Response)  => {
    const counter = renderToString(React.createElement(Counter));
    const textview = renderToString(React.createElement(TextView, {"compiler":`${versions.node}`, "framework":`${versions.openssl}`, "library":`${versions.modules}`}));

    res.send(
      html({
        counter, textview
      })
    );
}
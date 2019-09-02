const html = ({ counter, textview }: { counter: string, textview: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div id="counter">${counter}</div>
      <div id="textview">${textview}</div>
    </body>
    <script src="js/counter.js" defer></script>
    <script src="js/textview.js" defer></script>
  </html>
`;

export default html;
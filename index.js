const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  let requireUuidErrorStack = null;
  try {
    require('uuid');
  } catch (error) {
    requireUuidErrorStack = error.stack;
  }
  const content =
    `<!DOCTYPE html>\n` +
    `<html><body><pre>\n` +
    `Hello World!\n` +
    `process.version: ${process.version}\n` +
    `process.execArgv: ${process.execArgv.join(' ')}\n` +
    `process.features.require_module: ${process.features.require_module}\n` +
    `require('uuid') error: ${requireUuidErrorStack}\n` +
    `</pre></body></html>\n`;
  res.set('content-type', 'text/html').send(content);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

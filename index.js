const express = require('express');
const uuid = require('uuid');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Hello World! ${uuid.v4()}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

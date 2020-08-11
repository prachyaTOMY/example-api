const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const index = require('./router/index.router');

const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
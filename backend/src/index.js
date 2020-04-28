const express = require('express');
const routes = require('./routes.js');
const app = express();
const port = 3333;

app.use(routes);

app.listen(port);
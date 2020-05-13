const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);
const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const app = express();
const port = 3333;
const morgan = require("morgan");
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(require("./routes"));
app.use(express.urlencoded( { extended: true } ));
app.use(morgan('dev'));

app.listen(port);
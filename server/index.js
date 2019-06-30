const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const routes = require('./routes/routes.js');
app.use('/', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on ${port}`));
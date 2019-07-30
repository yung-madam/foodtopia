// External dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Internal dependencies
const config = require('./config');

// App
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', require('./routes'));

const port = process.env.PORT || 5000;
mongoose.connect(config.database.url, { useNewUrlParser: true })
.then(() => {
  app.listen(port, () =>
    console.log(`Backend listening on port ${port}!`),
  );
});

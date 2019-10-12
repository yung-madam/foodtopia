// External dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//const session = require('express-session')
const auth = require('./routes/auth');

// Internal dependencies
const config = require('./config');
require('./passport');

// App
const app = express();
app.use(bodyParser.json());
app.use(cors());
//app.use(session({ secret: config.secret, cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

// Authentication router and error handler
app.use(auth.router);
app.use(auth.handler);

// Routes
app.use('/api', require('./routes'));

const port = process.env.PORT || 5000;
mongoose.connect(config.database.url, { useNewUrlParser: true })
.then(() => {
  app.listen(port, () =>
    console.log(`Backend listening on port ${port}!`),
  );
});

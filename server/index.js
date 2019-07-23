// External dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Internal dependencies
//const connectDb = require('./model').connectDb;
const mongoose = require('mongoose');
const config = require('./config');

// App
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', require('./routes'));

var MyModel = mongoose.model('prdelka', new mongoose.Schema({}));

const port = process.env.PORT || 5000;
mongoose.connect(config.database.url, { useNewUrlParser: true })
.then(async () => {
    app.listen(port, () =>
      console.log(`Backend listening on port ${port}!`),
    );

    console.log(JSON.stringify(await MyModel.findOne({name: "anus"}), null));
    MyModel

});

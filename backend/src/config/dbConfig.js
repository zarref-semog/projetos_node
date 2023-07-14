const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://<user>:<password>@cluster0.0r9yvca.mongodb.net/';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;
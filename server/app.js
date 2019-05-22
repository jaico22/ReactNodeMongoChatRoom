const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/react_chat')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get('/', (req, res) => res.send('App is owrking'))

app.use('/api', routes)

app.listen(5000, () => console.log('New servier is listening on port 5000'))

module.exports = {
    app
}
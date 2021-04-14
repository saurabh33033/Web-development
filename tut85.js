// getting-started.js
// This is how to connect mongoose with nodejs
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
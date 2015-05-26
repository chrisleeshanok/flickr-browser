var express = require('express');
var nconf = require('nconf');
var app = express();
var interesting_router = require('./routes/interesting.js');

nconf.env().argv();      
nconf.file('./config/config.json');
app.use(interesting_router);

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening on port %s', port);
})

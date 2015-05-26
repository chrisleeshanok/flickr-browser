var express = require('express'),
    nconf = require('nconf'),
    path = require('path'),
    cons = require('consolidate');
    dust = require('dustjs-linkedin');

var app = express();
var interesting_router = require('./routes/interesting.js');

nconf.env().argv();      
nconf.file('./config/config.json');

//Set up the templating engine
app.engine('dust', cons.dust); //dust files should be handled by dust
app.set('view engine', 'dust');
app.set('views', './views');


//-----------------------------------------------------------------------------
// Routes
//-----------------------------------------------------------------------------

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(interesting_router); 

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening on port %s', port);
})

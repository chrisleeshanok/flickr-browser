var express = require('express');
var request = require('request');
var async = require('async');
var nconf = require('nconf');
var router = express.Router();

router.get('/', function(req, res) {
    var flickr = nconf.get('flickr');
    var interestingEndpoint = flickr.url + flickr.endpoints.interesting + 
        '&api_key=' + flickr.api_key + '&format=json&nojsoncallback=?';
    async.parallel([
        function(callback) {
            request.get({
                url: interestingEndpoint
            }, function (error, response) {
                callback(error, response);
            });
        }
        ], 
        function (error, response) {
            if (!error) {
                console.log(response[0].body);
                res.send(response[0].body);
            } else {
                res.send(error);
            }
        }
    );
});

module.exports = router;

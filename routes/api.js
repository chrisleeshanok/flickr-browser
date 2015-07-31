var express = require('express');
var request = require('request');
var async = require('async');
var nconf = require('nconf');
var router = express.Router();

router.get('/api/photos/:page', function(req, res) {
    var flickr = nconf.get('flickr');
    var interestingEndpoint = flickr.url + flickr.endpoints.interesting +
        '&api_key=' + flickr.api_key + flickr.api_suffix + flickr.api_photos_per_page + '&page=' + req.params.page;
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
                res.send(JSON.parse(response[0].body).photos.photo);
            } else {
                res.send(error);
            }
        }
    );
});

module.exports = router;

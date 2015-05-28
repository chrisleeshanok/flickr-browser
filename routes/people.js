var express = require('express');
var request = require('request');
var async = require('async');
var nconf = require('nconf');
var router = express.Router();
var React = require('react');
var FlickrBrowser = React.createFactory(require('../lib/react/components/FlickrBrowser').FlickrBrowser);

router.get('/people', function(req, res) {
    var flickr = nconf.get('flickr');
    var secret = nconf.get('secret');
    var peopleEndpoint = flickr.url + flickr.endpoints.photosByPerson + 
        '&api_key=' + flickr.api_key + '&user_id=' + secret.authorUserId + flickr.api_suffix;
    async.parallel([
        function(callback) {
            request.get({
                url: peopleEndpoint
            }, function (error, response) {
                callback(error, response);
            });
        }
        ], 
        function (error, response) {
            if (!error) {
                console.log(response[0].body);
                var reactSSR = React.renderToString(new FlickrBrowser({photoData: JSON.parse(response[0].body)}));
                var data = {
                    photoData: response[0].body,
                    reactSSR: reactSSR
                };
                res.render('main', data);
            } else {
                res.send(error);
            }
        }
    );
});

module.exports = router;
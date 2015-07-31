var express = require('express');
var request = require('request');
var async = require('async');
var nconf = require('nconf');
var router = express.Router();
var React = require('react');

var PhotoModel = require('../lib/models/PhotoModel').PhotoModel;
var AppModel = require('../lib/models/AppModel').AppModel;
var PhotoCollection = require('../lib/models/PhotoCollection').PhotoCollection;
var FlickrBrowser = React.createFactory(require('../lib/react/components/FlickrBrowser').FlickrBrowser);

router.get('/', function(req, res) {
    var flickr = nconf.get('flickr');
    var interestingEndpoint = flickr.url + flickr.endpoints.interesting +
        '&api_key=' + flickr.api_key + flickr.api_suffix + flickr.api_photos_per_page;
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
                PhotoCollection.add(JSON.parse(response[0].body).photos.photo);
                var reactSSR = React.renderToString(new FlickrBrowser({photoCollection: PhotoCollection, appModel: AppModel}));
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

var Backbone = require('backbone');

var PhotoModel = Backbone.Model.extend({
    initialize: function() {
        console.log('PhotoModel Init');
    }
});

module.exports.PhotoModel = PhotoModel;

var PhotoCollection = Backbone.Collection.extend({
    model: PhotoModel,
    initialize: function() {
        console.log('Collection Initialized');
    }
})

module.exports.PhotoCollection = PhotoCollection;

var Backbone = require('backbone');

var PhotoModel = Backbone.Model.extend({
    initialize: function() {
        console.log('PhotoModel Init');
    }
});

module.exports.PhotoModel = PhotoModel;

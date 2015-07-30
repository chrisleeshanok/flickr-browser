var Backbone = require('backbone');
var AppDispatcher = require('../flux/Dispatcher').AppDispatcher;

var PhotoModel = Backbone.Model.extend({
    defaults: {
        id: "",
        owner: "",
        secret: "",
        farm: "",
        title: "",
        ownername: "",
        favorited: false
    },

    idAttribute: "id",

    toggleFavorited: function() {
        var old_favorite_state = this.get('favorited');
        this.set({favorited: !old_favorite_state});
    },

    getPhotoUrl: function() {
        return 'https://farm' + this.attributes.farm
            + '.staticflickr.com/' + this.attributes.server + '/'
            + this.attributes.id + '_' + this.attributes.secret + '.jpg'
    },

    getLinkToPhoto: function() {
        return 'http://www.flickr.com/photos/' + this.attributes.owner + '/' + this.attributes.id + '/';
    },

    getLinkToArtist: function() {
        return 'http://www.flickr.com/photos/' + this.attributes.owner;
    }
});

module.exports.PhotoModel = PhotoModel;

var Backbone = require('backbone');
var PhotoModel = require('./PhotoModel').PhotoModel;
var AppDispatcher = require('../flux/Dispatcher').AppDispatcher;

var PhotoCollection = Backbone.Collection.extend({
    model: PhotoModel,
    initialize: function() {
        this.dispatchToken = AppDispatcher.register(this.dispatchCallback);
    },

    dispatchCallback: function(payload) {
        switch (payload.actionType) {
            case 'photo-toggle-selected':
                payload.photo.toggleSelected();
                break;
            case 'photo-toggle-favorited':
                payload.photo.toggleFavorited();
                break;
            case 'photo-remove':
                console.log('received photo remove actiontype');
                this.PhotoCollection.remove(payload.photo);
                break;
            default:
                console.log('PhotoCollection received action but discarded it.');
                break;
        }
    }.bind(this)
});

var AppPhotoCollection = new PhotoCollection();

module.exports.PhotoCollection = AppPhotoCollection;

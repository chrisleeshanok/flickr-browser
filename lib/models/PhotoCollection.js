var Backbone = require('backbone');
var PhotoModel = require('./PhotoModel').PhotoModel;
var AppDispatcher = require('../flux/Dispatcher').AppDispatcher;

var PhotoCollection = Backbone.Collection.extend({
    model: PhotoModel,
    currentPage: 1,
    baseUrl: '/api/photos/',
    url: '/api/photos/1',

    initialize: function() {
        this.dispatchToken = AppDispatcher.register(this.dispatchCallback);
    },

    dispatchCallback: function(payload) {
        switch (payload.actionType) {
            case 'fetch-more-photos':
                this.PhotoCollection.fetchMorePhotos();
                break;
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
    }.bind(this),

    fetchMorePhotos: function() {
        this.currentPage++;
        this.url = this.baseUrl + this.currentPage;
        this.fetch({add: true, remove: false});
    }
});

var AppPhotoCollection = new PhotoCollection();

module.exports.PhotoCollection = AppPhotoCollection;

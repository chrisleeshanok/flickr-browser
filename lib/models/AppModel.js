var Backbone = require('backbone');
var AppDispatcher = require('../flux/Dispatcher').AppDispatcher;

var AppModel = Backbone.Model.extend({
    defaults: {
        favoriteCount: 0
    },

    initialize: function() {
        this.dispatchToken = AppDispatcher.register(this.dispatchCallback);
    },

    dispatchCallback: function(payload) {
        switch(payload.actionType) {
            case 'app-increment-favorite':
                console.log(this);
                this.AppModel.set({'favoriteCount': this.AppModel.get('favoriteCount') + 1});
                break;
            case 'app-decrement-favorite':
                this.AppModel.set({'favoriteCount': this.AppModel.get('favoriteCount') - 1});
                break;
            default:
                console.log('AppModel received action but discarded it.');
        }
    }.bind(this)
});

var appModel = new AppModel();

module.exports.AppModel = appModel;

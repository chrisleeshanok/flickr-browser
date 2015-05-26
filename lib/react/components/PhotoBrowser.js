"use strict";
/** @JSX React.DOM */
var React = require('react');
var Photo = require('./Photo').Photo;

var PhotoBrowser = React.createClass({
    getInitialState: function () {
        return {
            photos: this.props.photos
        };
    },
    render: function () {

        var photoComponents = this.state.photos.map(function(photo) {
            return <Photo farmId={photo.farm} serverId={photo.server} photoId={photo.id} secret={photo.secret}/>
        });
        return (
            <div className="photo-browser">
                {photoComponents}
            </div>
        );
    } 
});

module.exports.PhotoBrowser = PhotoBrowser;
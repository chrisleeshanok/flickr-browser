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

    componentWillReceiveProps: function(nextProps) {
        this.setState({
            photos: nextProps.photos
        });
    },

    removePhoto: function(id) {
        var newPhotos = this.state.photos.filter(function(photo) {
            if (photo.id === id) {
                return false;
            } else {
                return true;
            }
        });
        this.props.updatePhotoHandler(newPhotos);
    },

    render: function () {
        console.log('Render called for PhotoBrowser');
        var photosCopy = this.state.photos.slice(0);

        var photoComponents1 = photosCopy.splice(0, Math.floor(this.state.photos.length/2)).map(function(photo) {
            return <Photo removeHandler={this.removePhoto} ownerId={photo.owner} title={photo.title} ownername={photo.ownername} key={photo.id} farmId={photo.farm} serverId={photo.server} photoId={photo.id} secret={photo.secret}/>
        }.bind(this));
        var photoComponents2 = photosCopy.map(function(photo) {
            return <Photo removeHandler={this.removePhoto} ownerId={photo.owner} title={photo.title} ownername={photo.ownername} key={photo.id} farmId={photo.farm} serverId={photo.server} photoId={photo.id} secret={photo.secret}/>
        }.bind(this));
        return (
            <div className="photo-browser">
                <div className="photo-column">
                    {photoComponents1}
                </div>
                <div className="photo-column">
                    {photoComponents2}
                </div>
                <div className="clear-float"></div>
            </div>
        );
    } 
});

module.exports.PhotoBrowser = PhotoBrowser;
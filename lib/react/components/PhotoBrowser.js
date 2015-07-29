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

    render: function () {
        var photosCopy = this.state.photos.slice(0);

        var photoComponents1 = photosCopy.splice(0, Math.floor(this.state.photos.length/2)).map(function(photo) {
            return <Photo   countModifier={this.props.countModifier}
                            ownerId={photo.attributes.owner}
                            title={photo.attributes.title}
                            ownername={photo.attributes.ownername}
                            key={photo.attributes.id}
                            farmId={photo.attributes.farm}
                            serverId={photo.attributes.server}
                            photoId={photo.attributes.id}
                            secret={photo.attributes.secret}
                            photoModel={photo}/>
        }.bind(this));
        var photoComponents2 = photosCopy.map(function(photo) {
            return <Photo   countModifier={this.props.countModifier}
                            ownerId={photo.attributes.owner}
                            title={photo.attributes.title}
                            ownername={photo.attributes.ownername}
                            key={photo.attributes.id}
                            farmId={photo.attributes.farm}
                            serverId={photo.attributes.server}
                            photoId={photo.attributes.id}
                            secret={photo.attributes.secret}
                            photoModel={photo}/>
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

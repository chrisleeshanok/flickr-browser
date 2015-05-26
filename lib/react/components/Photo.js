"use strict";
/** @JSX React.DOM */
var React = require('react');

var Photo = React.createClass({
    render: function() {
        var photoURL = 'https://farm' + this.props.farmId 
            + '.staticflickr.com/' + this.props.serverId + '/' 
            + this.props.photoId + '_' + this.props.secret + '.jpg';
        return (
            <div className="photo">
                <img src={photoURL} className="photo-image"/>
            </div>
        );
    }
});

module.exports.Photo = Photo;
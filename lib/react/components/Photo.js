"use strict";
/** @JSX React.DOM */
var React = require('react');

var Photo = React.createClass({
    getInitialState: function() {
        return {
            selected: false
        };
    },

    toggleSelection: function() {
        this.setState({
            selected: !this.state.selected
        });
    },
    render: function() {
        var photoURL = 'https://farm' + this.props.farmId 
            + '.staticflickr.com/' + this.props.serverId + '/' 
            + this.props.photoId + '_' + this.props.secret + '.jpg';
        var photoLink = 'http://www.flickr.com/photos/' + this.props.ownerId + '/' + this.props.photoId + '/'
        var artistLink = 'http://www.flickr.com/photos/' + this.props.ownerId;

        if (this.state.selected) {
            return (
                <div className="photo">
                    <img src={photoURL} className="photo-image"/>
                    <div className="selected-wrapper">
                        <div className="overlay"></div>
                        <div className="overlay-content">
                            <div className="close">
                                <button onClick={this.toggleSelection}>X</button>
                            </div>
                            <div className="overlay-artist">
                                <div className="photo-title"><a href={photoLink}>{this.props.title}</a></div>
                                <div className="photo-owner">by <a href={artistLink}>{this.props.ownername}</a></div>
                            </div>
                            <div className="overlay-controls">
                                <button>Meh</button>
                                <button>AWESOME</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="photo">
                    <img src={photoURL} className="photo-image" onClick={this.toggleSelection}/>
                </div>
            );            
        }

    }
});

module.exports.Photo = Photo;
"use strict";
/** @JSX React.DOM */
var React = require('react');
var AppDispatcher = require('../../flux/Dispatcher').AppDispatcher;

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

    toggleFavorited: function() {
        AppDispatcher.dispatch({
            actionType: 'photo-toggle-favorited',
            photo: this.props.photoModel
        });
    },

    removePhoto: function() {
        if (this.props.photoModel.get('favorited')) {
            this.props.countModifier(1);
        }
        AppDispatcher.dispatch({
            actionType: 'photo-remove',
            photo: this.props.photoModel
        });
    },

    render: function() {
        var photoURL = this.props.photoModel.getPhotoUrl();
        var photoLink = this.props.photoModel.getLinkToPhoto();
        var artistLink = this.props.photoModel.getLinkToArtist();

        var favoriteIcon = '';
        var favoriteButtonValue = 'AWESOME';

        if (this.props.photoModel.get('favorited')) {
            favoriteIcon = <div className="favorited"></div>;
            var favoriteButtonValue = 'NO LONGER AWESOME';
        }

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
                                <div className="photo-title"><a href={photoLink}>{this.props.photoModel.attributes.title}</a></div>
                                <div className="photo-owner">by <a href={artistLink}>{this.props.photoModel.attributes.ownername}</a></div>
                            </div>
                            <div className="overlay-controls">
                                <button onClick={this.removePhoto}>Meh</button>
                                <button onClick={this.toggleFavorited}>{favoriteButtonValue}</button>
                            </div>
                        </div>
                    </div>
                    {favoriteIcon}
                </div>
            );
        } else {
            return (
                <div className="photo">
                    <img src={photoURL} className="photo-image" onClick={this.toggleSelection}/>
                    {favoriteIcon}
                </div>
            );
        }

    }
});

module.exports.Photo = Photo;

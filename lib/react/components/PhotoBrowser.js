"use strict";
/** @JSX React.DOM */
var React = require('react');
var Photo = require('./Photo').Photo;
var AppDispatcher = require('../../flux/Dispatcher').AppDispatcher;

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

    fetchMorePhotos: function() {
        AppDispatcher.dispatch({
            actionType: 'fetch-more-photos'
        });
    },

    render: function () {
        var photoComponents1 = [];
        var photoComponents2 = [];
        for (var i = 0; i < this.state.photos.length; i++) {
            if (i % 2 > 0) {
                photoComponents1.push(<Photo key={this.state.photos[i].attributes.id}
                                photoModel={this.state.photos[i]}/>);
            } else {
                photoComponents2.push(<Photo key={this.state.photos[i].attributes.id}
                                photoModel={this.state.photos[i]}/>);
            }
        }
        var photoComponents = this.state.photos.map(function(photo) {
            return
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
                <div className="fetch-controls">
                    <button onClick={this.fetchMorePhotos} className="fetch-more-photos">More Photos...</button>
                </div>
            </div>
        );
    }
});

module.exports.PhotoBrowser = PhotoBrowser;

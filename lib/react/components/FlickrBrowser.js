"use strict";
/** @JSX React.DOM */
var React = require('react');
var Navbar = require('./Navbar').Navbar;
var PhotoBrowser = require('./PhotoBrowser').PhotoBrowser;

var FlickrBrowser = React.createClass({
	getInitialState: function() {
		return {
			photoData: this.props.photoData.photos
		};
	},

	updatePhotos: function(newPhotos) {
		console.log('FlickrBrowser updatePhotos called');
		var photoDataCopy = JSON.parse(JSON.stringify(this.state.photoData));
		photoDataCopy.photo = newPhotos;

		this.setState({
			photoData: photoDataCopy
		});
	},

	render: function () {
		console.log('Render called for FlickrBrowser');
		return (
			<div className="flickr-browser">
				<Navbar/>
				<PhotoBrowser updatePhotoHandler={this.updatePhotos} photos={this.state.photoData.photo}/>
			</div>
		);
	}
});

module.exports.FlickrBrowser = FlickrBrowser;
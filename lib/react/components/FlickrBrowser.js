"use strict";
/** @JSX React.DOM */
var React = require('react');
var Navbar = require('./Navbar').Navbar;
var PhotoBrowser = require('./PhotoBrowser').PhotoBrowser;

var FlickrBrowser = React.createClass({
	getInitialState: function() {
		return {
			photoData: this.props.photoData.photos,
			likeCount: 0
		};
	},

	modifyCount: function (value) {
		this.setState({
			likeCount: this.state.likeCount + value
		});
	},

	updatePhotos: function(newPhotos) {
		var photoDataCopy = JSON.parse(JSON.stringify(this.state.photoData));
		photoDataCopy.photo = newPhotos;

		this.setState({
			photoData: photoDataCopy
		});
	},

	render: function () {
		return (
			<div className="flickr-browser">
				<Navbar likeCount={this.state.likeCount} />
				<PhotoBrowser countModifier={this.modifyCount} updatePhotoHandler={this.updatePhotos} photos={this.state.photoData.photo}/>
			</div>
		);
	}
});

module.exports.FlickrBrowser = FlickrBrowser;
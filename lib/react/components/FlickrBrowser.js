"use strict";
/** @JSX React.DOM */
var React = require('react');
var Navbar = require('./Navbar').Navbar;
var PhotoBrowser = require('./PhotoBrowser').PhotoBrowser;

var FlickrBrowser = React.createClass({
	getInitialState: function() {
		return {
			photos: this.props.photoData,
			likeCount: 0
		};
	},

	modifyCount: function (value) {
		this.setState({
			likeCount: this.state.likeCount + value
		});
	},

	updatePhotos: function(newPhotos) {
		this.setState({
			photos: newPhotos
		});
	},

	render: function () {
		return (
			<div className="flickr-browser">
				<Navbar likeCount={this.state.likeCount} />
				<PhotoBrowser countModifier={this.modifyCount} updatePhotoHandler={this.updatePhotos} photos={this.state.photos}/>
			</div>
		);
	}
});

module.exports.FlickrBrowser = FlickrBrowser;

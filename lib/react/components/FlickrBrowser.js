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
	render: function () {
		return (
			<div className="flickr-browser">
				<Navbar/>
				<PhotoBrowser photos={this.state.photoData.photo}/>
			</div>
		);
	}
});

module.exports.FlickrBrowser = FlickrBrowser;
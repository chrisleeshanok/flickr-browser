"use strict";
/** @JSX React.DOM */
var React = require('react');
var Navbar = require('./Navbar').Navbar;
var PhotoBrowser = require('./PhotoBrowser').PhotoBrowser;

var FlickrBrowser = React.createClass({
	getInitialState: function() {
		return {
			likeCount: 0
		};
	},

	componentDidMount: function() {
		//After the component mounts, register a function to change events of the collection
		this.props.photoCollection.on('add remove reset', function() {
			console.log('Add remove or reset triggered, force updating!');
			this.forceUpdate();
		}.bind(this), this);
	},

	componentWillUnmount: function() {
		//Unbind the event
		this.props.photoCollection.off(null, null, this);
	},

	modifyCount: function (value) {
		this.setState({
			likeCount: this.state.likeCount + value
		});
	},

	render: function () {
		return (
			<div className="flickr-browser">
				<Navbar likeCount={this.state.likeCount} />
				<PhotoBrowser countModifier={this.modifyCount} photos={this.props.photoCollection.models}/>
			</div>
		);
	}
});

module.exports.FlickrBrowser = FlickrBrowser;

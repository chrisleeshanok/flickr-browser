"use strict";
/** @JSX React.DOM */
var React = require('react');

var FlickrBrowser = React.createClass({
	render: function () {
		return (
			<html>
				<head>
					<title>FlickrBrowser</title>
				</head>
				<body>
					<h1>Hello React World</h1>
				</body>
			</html>
		);
	}
});

module.exports.FlickrBrowser = FlickrBrowser;
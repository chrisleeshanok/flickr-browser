"use strict";
/** @JSX React.DOM */
var React = require('react');

var Navbar = React.createClass({
    render: function() {
        return (
            <div className="navbar">
                <div className="navbar-elements">
                    <div className="title">
                        Flickri
                    </div>
                </div>
                <div className="navbar-bg"></div>
            </div>
        );
    }
});

module.exports.Navbar = Navbar;
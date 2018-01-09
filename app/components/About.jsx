var React = require('react');

var About = (props) => {
	return(
		<div>
			<h1 className="text-center">About</h1>
			<p>This is an app created by <a href="http://www.jamesseabrook.com" target="_BLANK">myself</a> as a way of learning React.</p>
			<p>It uses openWeatherMap free API to retrieve the data required.</p>
		</div>
	)
};

module.exports = About;
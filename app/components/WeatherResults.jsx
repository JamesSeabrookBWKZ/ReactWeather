var React = require('react');

var WeatherResults = ({temp, location}) => {
		return(
			<p>It is {temp} degrees C in {location}.</p>
		)
}

module.exports = WeatherResults;
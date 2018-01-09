var React = require('react');

var WeatherResults = ({temp, location}) => {
		return(
			<h3 className="text-center">It is {temp}&deg;c in {location}.</h3>
		)
}

module.exports = WeatherResults;
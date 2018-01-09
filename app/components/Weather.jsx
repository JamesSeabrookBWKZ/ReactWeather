var React = require('react');

// components

var WeatherForm = require('WeatherForm');
var WeatherResults = require('WeatherResults');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState(){
		return{
			isLoading: false
		}
	},

	handleSearch(location){
		var that = this;

		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			})
		}, function(errorMessage){
			that.setState({
				isLoading: false
			});
			alert(errorMessage);
		});
	},

	render(){
		var {isLoading, temp, location} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3>Fetching weather...</h3>;
			}else if(temp && location){
				return <WeatherResults temp={temp} location={location} />;
			}
		}

		return(
			<div>
				<h3>Get Weather</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
});


module.exports = Weather;
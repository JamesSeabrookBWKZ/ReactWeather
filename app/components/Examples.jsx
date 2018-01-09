var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return(
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are a few example locations to try out</p>git 
			<ol>
				<li><Link to='/?location=London'>london</Link></li>
				<li><Link to='/?location=Paris'>Paris</Link></li>
			</ol>
		</div>
	)
}


module.exports = Examples;
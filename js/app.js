import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import Relay from "react-relay";

//let Hello = React.createClass({
//	render(){
//	        return <h3>Hello webpack?</h3>
//         }
//});


//ReactDOM.render(React.createElement(Hello), document.getElementById('react'));
ReactDOM.render(<Main limit={4} />, document.getElementById('react'));

console.log(
	Relay.QL`
	query Test{
	  links {
	    title
	  }
	}
	`
);


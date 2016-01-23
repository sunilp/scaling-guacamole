import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";

//let Hello = React.createClass({
//	render(){
//	        return <h3>Hello webpack?</h3>
//         }
//});


//ReactDOM.render(React.createElement(Hello), document.getElementById('react'));
ReactDOM.render(<Hello />, document.getElementById('react'));


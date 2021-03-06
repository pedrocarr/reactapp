import React from 'react';

class Greet extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {val: "awesome"};
	}
	
	
	changeValue = () => {
		this.setState(
			{val: "wonderful"}
			);
		}
	
	render(){
		return(
			<div>
				<h1>Hello {this.state.val} PayPal's World</h1>
				<button type="button" class="btn btn-primary" onClick={this.changeValue}>Change value</button>
			</div>
		);
	}
}


export default Greet;


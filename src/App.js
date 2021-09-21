import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import { REASONS } from './shared/reasons';
import Greet from './components/greet';
import SocialFollow from "./SocialFollow";

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			reasons: REASONS
		};
	}
	
	render(){
		return (
			<div className='App'>
				<Navbar color="primary">
					<div className="container" id="brand">
						<NavbarBrand>PayPal Job Application</NavbarBrand>
						<SocialFollow></SocialFollow>
						<NavbarBrand>Made by Pedro Carvalho</NavbarBrand>
					</div>
				</Navbar>
				<Greet />
				<h1>Reasons to choose PayPal</h1>
				<Menu reasons={this.state.reasons} />
			</div>
		);
	}
}

export default App;
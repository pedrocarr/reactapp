import React from 'react';
import { Media } from 'reactstrap';
import './media.css';

class Menu extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {};
	}
	
	render(){
		
		const menu = this.props.reasons.map((reason) => {
			return(
				<div key={reason.id} id="unit" className="col-12 mt-5">					
						<Media body className="ml-3">
							<Media heading><strong>{reason.name}</strong></Media>
							<div><strong>Info - </strong>{reason.description}</div>
							<div>Info source - {reason.source}</div>
						</Media>
				</div>
			);
		});
		
		return(
			<div className="container">
				<div className="row">
					<Media list>
						{menu}
					</Media>
				</div>
			</div>
		);
	}
}

// 'Keys' - It helps identify which items have changed, are added or removed.


export default Menu;
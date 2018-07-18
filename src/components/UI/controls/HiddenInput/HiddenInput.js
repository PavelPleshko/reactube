import React, {Component} from 'react';

class HiddenInput extends Component{


	render(){
		const {input: { value, onChange }} = this.props;
	return (
		 <input 
                       value={value}                  
                         onChange={onChange} 
                      hidden={true}
                         />
		 
	)
	}
}


export default HiddenInput;
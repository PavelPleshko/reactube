import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './TextInput.css';
class TextInput extends Component{

shouldComponentUpdate(nextProps,nextstate){
	return this.props.value != nextProps.value;
}
	render(){
		const {label,handleChange,value,type,helperText} = this.props;
	return (
		 <TextField label={label} type={type || 'text'}
              className={classes.TextInput}
                         value={value}
                          margin={helperText ? 'dense' : 'normal'}
                         onChange={handleChange} 
                         helperText={helperText}
                         />
		 
	)
	}
}

TextInput.defaultProps = {
  helperText: ''
};

export default TextInput;
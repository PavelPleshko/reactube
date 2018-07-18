import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './TextInput.css';
class TextInput extends Component{


	render(){
		const {label,input: { value, onChange },type,helperText,multiline} = this.props;
	return (
		 <TextField label={label} type={type || 'text'}
              className={classes.TextInput}
                         value={value}
                         multiline={multiline}
                          margin={helperText ? 'dense' : 'normal'}
                         onChange={onChange} 
                         helperText={helperText}
                         />
		 
	)
	}
}

TextInput.defaultProps = {
  helperText: '',
  multiline:false
};

export default TextInput;
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme =>({
  textInput:{
    width:'100%'
  }
})

class TextInput extends Component{



	render(){
		const {classes,adornment,label,input: { value, onChange },type,helperText,multiline} = this.props;
	return (
		 <TextField label={label} type={type || 'text'}
              className={classes.textInput}
                         value={value}
                         multiline={multiline}
                          margin={helperText ? 'dense' : 'normal'}
                         onChange={onChange} 
                         helperText={helperText}
                          InputProps={{
            startAdornment: adornment && <InputAdornment position="start">{adornment}</InputAdornment>,
          }}
                         />
		 
	)
	}
}

TextInput.defaultProps = {
  helperText: '',
  multiline:false
};

export default withStyles(styles)(TextInput);
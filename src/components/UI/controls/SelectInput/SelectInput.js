import React, {Component} from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
formControl: {
    minWidth: '100%',
    textAlign:'left',
    marginTop:'.5rem'
  }
});


class SelectInput extends Component{


	render(){
		let {classes,label,options,input: { value, onChange },name} = this.props;
    if(typeof value == 'object'){
      value = value._id;
    }
	return (
		    <FormControl className={classes.formControl}>
              <InputLabel htmlFor={label}>{label}</InputLabel>
              <Select
                value={value}
                onChange={onChange}
                name={name}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {options.map(option=>{
                  return  <MenuItem key={option._id} value={option._id}>{option.title}</MenuItem>
                })}
               
                
              </Select>
         </FormControl>
	)
	}
}


export default withStyles(styles)(SelectInput);
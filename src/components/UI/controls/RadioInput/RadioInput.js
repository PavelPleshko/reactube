import React, {Component} from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
formControl: {
    minWidth: '100%',
    textAlign:'left',
    marginTop:'.5rem'
  },
    group: {
    margin:0,
    display:'flex',
    flexDirection:'row'
  }
});

const radioInput = (props)=>{

	
		const {classes,input: { value, onChange },label,options,name} = props;
	return (
		      <FormControl component="fieldset" required className={classes.formControl}>
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
                 name={name}            
                  className={classes.group}
                  value={value}
                  onChange={onChange}
                >
                {options.map((option,i)=>{
                	return <FormControlLabel key={i} value={option.value} control={<Radio color="primary" />} label={option.label} />
                })}
            </RadioGroup>
          </FormControl>
	)
}


export default withStyles(styles)(radioInput);
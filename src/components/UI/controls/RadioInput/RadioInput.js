import React, {Component} from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class RadioInput extends Component{

  shouldComponentUpdate(nextProps,nextstate){
  return this.props.value != nextProps.value;
}
	render(){
		const {classes,value,label,options,handleChange} = this.props;
	return (
		      <FormControl component="fieldset" required className={classes.formControl}>
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
                  aria-label="gender"
                  name="gender"
                  className={classes.group}
                  value={value}
                  onChange={handleChange}
                >
                {options.map((option,i)=>{
                	return <FormControlLabel key={i} value={option.value} control={<Radio color="primary" />} label={option.label} />
                })}
            </RadioGroup>
          </FormControl>
	)
	}
}


export default RadioInput;
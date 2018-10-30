import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';

import AutocompleteOption from './autocompleteOption';
import MultiChipSelect from './MultichipSelect';

class AutocompleteInput extends Component{



	render(){
	return (
          <MultiChipSelect
           
            suggestions={this.props.data}
           
          />
      
		 
	)
	}
}



export default AutocompleteInput;
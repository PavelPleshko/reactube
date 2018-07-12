import React, {Component} from 'react';

//material ui
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import TextInput from '../../../components/UI/controls/TextInput/TextInput';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme =>({
	card:{
			padding:'1.5rem 2.5rem',
			textAlign:'center'
		},
formControl: {
    minWidth: '100%',
  },
});

class FileMetaForm extends Component{
	
	state={
		
	};
	
	render(){
		const {classes} = this.props;
	return (
		<div>
		<Card className={classes.card}>
			<Typography variant="headline">New media</Typography>
			<TextInput label="Title *" helperText="Short title between 5-20 characters" />
			<TextInput label="Description *" helperText="Concisely describe the video"/>
			
			<FormControl className={classes.formControl}>
		          <InputLabel htmlFor="category">Category</InputLabel>
		          <Select
		           // value={this.state.age}
		           // onChange={this.handleChange}
		           inputProps={{
		              name: 'category',
		              id: 'category'
          			  }}
		          >
		            <MenuItem value="">
		              <em>None</em>
		            </MenuItem>
		            <MenuItem value="cartoons">Cartoons</MenuItem>
		            <MenuItem value="educational">Educational</MenuItem>
		            <MenuItem value="scary">Scary</MenuItem>
		          </Select>
     	   </FormControl>
		</Card>
		<ExpansionPanel defaultExpanded={true}>
		        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
		          <Typography>Additional information</Typography>
		        </ExpansionPanelSummary>
		        <ExpansionPanelDetails>
		          <Typography>
		            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
		            sit amet blandit leo lobortis eget.
		          </Typography>
		        </ExpansionPanelDetails>
		  </ExpansionPanel>	
		  </div>
	)
	}
}


export default withStyles(styles)(FileMetaForm);
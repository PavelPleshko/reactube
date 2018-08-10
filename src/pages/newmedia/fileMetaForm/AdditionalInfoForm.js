import React, {Component} from 'react';

import {selectAllCategories} from '../../../store/states/media/category/category.selectors';
import {connect} from 'react-redux';
import {selectAllTags} from '../../../store/states/media/tag/tag.selectors';

import { Field } from 'redux-form'
import MultiChipSelect from '../../../components/UI/controls/AutocompleteInput/MultichipSelect';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



const styles = theme =>({
	header:{
		color:theme.palette.primary.grey,
		borderBottom:`1px dashed ${theme.palette.primary.lightGrey}`
	}
})
class AdditionalInfoForm extends Component{
	
	render(){
		const {classes}=this.props;
	return (
		<React.Fragment>
			<Typography variant="body2" className={classes.header}>Additional information</Typography>
			<Field label="Tags" name="tags" component={MultiChipSelect} suggestions={this.props.tags} />
		</React.Fragment>
	)
	}
}

const mappedStateToProps = (state) =>(
{
  tags:selectAllTags(state.media.tags),
}
  );

export default connect(mappedStateToProps)(withStyles(styles)(AdditionalInfoForm));
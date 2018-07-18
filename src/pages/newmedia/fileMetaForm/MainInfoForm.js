import React, {Component} from 'react';

import {selectAllCategories} from '../../../store/states/media/category/category.selectors';
import {connect} from 'react-redux';
import { Field } from 'redux-form'

import TextInput from '../../../components/UI/controls/TextInput/TextInput';
import HiddenInput from '../../../components/UI/controls/HiddenInput/HiddenInput';
import SelectInput from '../../../components/UI/controls/SelectInput/SelectInput';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
	header:{
		color:theme.palette.primary.grey,
		borderBottom:`1px dashed ${theme.palette.primary.lightGrey}`
	}
})
class MainInfoForm extends Component{
	

	render(){
		const {classes}=this.props;
	return (
		<div>
			<Typography variant="body2" className={classes.header}>Main information</Typography>
			<Field label="Title*" helperText="Come up with a title" name="title" component={TextInput}/>
			<Field label="Description*" helperText="Shortly describe the video" multiline={true} name="description"component={TextInput}/>
			<Field label="Category*" name="category" component={SelectInput} options={this.props.categories} />
			<Field  name="video_url" component={HiddenInput} />
			<Field  name="duration" component={HiddenInput} />
		</div>
	)
	}
}

const mappedStateToProps = (state) =>(
{
  categories:selectAllCategories(state.media.categories),
}
  );

export default connect(mappedStateToProps)(withStyles(styles)(MainInfoForm));
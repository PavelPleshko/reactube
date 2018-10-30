import React, {Component} from 'react';

import {selectAllCategories} from '../../../store/states/media/category';
import {selectUserChannels,selectUser} from '../../../store/states/user';
import * as userOperations from '../../../store/states/user/user.operations';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
	

	componentDidMount = () => {
		const {channels,user,getUserChannels} = this.props;
		if(!channels){
			const userId = user._id;
			getUserChannels(userId);
		}
	}
	render(){
		const {classes,channels,categories}=this.props;
	return (
		<div>
			<Typography variant="body2" className={classes.header}>Main information</Typography>
			<Field label="Title *" helperText="Come up with a title" name="title" component={TextInput}/>
			<Field label="Description *" helperText="Shortly describe the video" multiline={true} name="description"component={TextInput}/>
			<Field label="Category *" name="category" component={SelectInput} options={categories || []} />
			<Field label="Channel *" name="channel" component={SelectInput} options={channels || []} />
			<Field  name="video_url" component={HiddenInput} />
			<Field  name="duration" component={HiddenInput} />
		</div>
	)
	}
}

const mappedStateToProps = (state) =>(
{
  categories:selectAllCategories(state.media.categories),
  channels:selectUserChannels(state.user),
  user:selectUser(state.user)
}
  );

const boundActionCreators = (dispatch) => 
bindActionCreators({...userOperations},dispatch);

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(MainInfoForm));
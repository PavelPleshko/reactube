import React, {Component} from 'react';
import { reduxForm,Field } from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//material ui
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import GradientButton from '../../../../components/UI/buttons/GradientButton/GradientButton';
import TextInput from '../../../../components/UI/controls/TextInput/TextInput';
import SelectInput from '../../../../components/UI/controls/SelectInput/SelectInput';

import {selectChannelTopics} from '../../../../store/states/channel';
import * as channelOperations from '../../../../store/states/channel/channel.operations';
import validators from '../../../../utils/form-validators/form-validators';

const styles = theme =>({
	card:{
			padding:'1rem 2.5rem',
			marginBottom:'.5rem',
			overflow:'visible'		
		},
	buttonCreate:{
		marginTop:'1rem',
		position:'relative',
		display:'inline-block',
		float:'right'
	},
	rightIcon:{
		marginLeft:'1rem'
	},
	header:{
		padding:'.3rem 2.5rem',
		marginBottom:'.5rem',
		display:'flex'
	},
	header2:{
		color:theme.palette.primary.grey,
		borderBottom:`1px dashed ${theme.palette.primary.lightGrey}`
	}
});

class CreateChannelForm extends Component{


componentDidMount = () => {
	const {channelTopics,getChannelsTopics} = this.props;
	if(!channelTopics || channelTopics.length === 0){
		getChannelsTopics();
	}
}



handleSubmit =(values)=>{	
	this.props.formSubmitted(values);
}

	render(){
		const {classes,submitBtnText='next',channelTopics} = this.props;
	return (
		<form onSubmit={ this.props.handleSubmit(this.handleSubmit) }>		
			 	<h3>New channel</h3>         
				<Field label="Title *" validate={[validators.required]} helperText="Displayed title" name="title" component={TextInput}/>
				<Field label="Description *" validate={[validators.required]} helperText="Shortly describe your channel" multiline={true} name="description"component={TextInput}/>
				<Field label="Topic *" validate={[validators.required]} name="topic" component={SelectInput} options={channelTopics} />
			
			
		      <Button type="submit" disabled={this.props.invalid} variant="contained" color="primary" classes={{root:classes.buttonCreate}}>		
					{submitBtnText}
		      </Button>
		</form>
		
	)
	}
}

const mappedStateToProps = (state) =>(
{
  channelTopics:selectChannelTopics(state.channel)
}
  );

const boundActionCreators = (dispatch) => bindActionCreators({...channelOperations},dispatch);


export default connect(mappedStateToProps,boundActionCreators)(reduxForm({
  form: 'createChannel'
})(withStyles(styles)(CreateChannelForm)));
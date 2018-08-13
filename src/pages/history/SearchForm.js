import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import TextInput from '../../components/UI/controls/TextInput/TextInput';

const styles = theme =>({
	searchInner:{
		padding:'5rem 2rem'
	},
	searchActions:{
		marginTop:'1.5rem'
	}
})


class SearchForm extends Component{
	
	state={
		search:''
	}
	
	onChangeHandler = (e) =>{
		this.setState({search:e.target.value})
	}

	render(){
		const {classes} = this.props;
	return (
		<div className={classes.searchInner}>
			<TextInput adornment={<SearchIcon />} label="Search in the view history" input={{value:this.state.search,onChange:this.onChangeHandler}}/>
		
			<div className={classes.searchActions}>
				<Button>Clear history</Button>
				<Button>Do not save my history</Button>
			</div>
		</div>
	)
	}
}


export default withStyles(styles)(SearchForm);
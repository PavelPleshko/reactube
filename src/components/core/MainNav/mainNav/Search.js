import React, {Component} from 'react';
import _ from 'lodash';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as appOperations from '../../../../store/states/app/app.operations';
import * as mediaOperations from '../../../../store/states/media/media.operations';
import {selectData} from '../../../../store/states/app/app.selectors';

import Suggestion from './search/Suggestion';

const styles = theme => ({
	root:{
		height: '1.8rem',
		display:'flex',
		alignItems:'center'
	},
	input:{
		'-webkit-appearance': 'none',
	    boxShadow: 'none',
	    border: 'none',
	    height: '100%',
	    minWidth:'20rem',
	    borderTopLeftRadius:3,
	    background: '#a4aaf8',
	    transition:'.3s',
	    paddingLeft:'5px',
	    color:'#fff',
	    boxSizing:'border-box',
	    
	},
	inputFocused:{
	    	minWidth:'23rem',
	    	backgroundColor:'#fff',
	    	outline:'none',
	    	border: '1px solid rgba(50,97,195,.8)',
	    	color:'#000000'	    
	},
	inputGroup:{
		height:'1.8rem',
		position:'relative',
		margin:0,
		padding:0
	},
	suggestions:{
		display:'flex',
		flexDirection:'column',
		background:'white',
		position:'absolute',
		left:0,
		width:'100%',
		color:'#000000',
		padding: '10px 0',
		fontSize:'.9rem',
        boxSizing: 'border-box',
	},

	inputAddon:{
		height:'100%',
		paddingLeft:3,
		border:'1px solid #a4aaf8',
		borderLeft:'none',
		transition:'.2s',
	    boxSizing:'border-box',
		'&:hover':{
			backgroundColor:'#696fb4',
			cursor:'pointer'
		}
	},
	searchIcon:{
		height:'100%'
	}
})

class Search extends Component{
	
	state={
		searchText:'',
		selected:null,
		opened:false,
		focused:false
	};

	componentDidMount = () =>{
		document.addEventListener('click',(e)=>{
			this.setState({opened:false,focused:false})
		})
	}

	handleChange = e =>{
		this.setState({searchText:e.target.value,opened:true},()=>{
			if(!this.state.selected){
				let query = this.state.searchText;
				if(query.length > 0){
					this.autocompleteSearchDebounced(query);
					}
			}
		})
	}
	
	autocompleteSearch = (query)=>{
		this.props.getSuggestions(query);
	}

	setInputRef = element =>{
		this.input = element;
	}

	selectedHandler = (text) => {
		this.setState({searchText:text});
	}

	searchSelectedMedia = () =>{
		let {searchText} = this.state;
		this.props.searchMedia(searchText);
	}

	setFocus = (e) =>{
		e.nativeEvent.stopImmediatePropagation();
		if(!this.state.focused){
			this.setState({focused:true})
		}
	}

	setOpened = (e) =>{
		e.nativeEvent.stopImmediatePropagation();
		if(!this.state.opened){
			this.setState({opened:true})
		}
	}

	autocompleteSearchDebounced = _.debounce(this.autocompleteSearch,2000);

	render(){
		const {classes,suggestions} = this.props;
		const {searchText,selected,opened} = this.state;
	return (
		<div className={classes.root}>
		<div className={classes.inputGroup}>
			<input type="text" onFocus={this.setFocus} onClick={this.setOpened} ref={this.setInputRef} className={[classes.input,this.state.focused ? classes.inputFocused : ''].join(' ')} value={this.state.searchText} onChange={this.handleChange}/>
			{(suggestions.length && !selected && opened) ? <div className={classes.suggestions}>
				{suggestions.map(item=>{
					return <Suggestion selected={this.selectedHandler} item={item.text} searchText={searchText} key={item._id} />
					
					
				})}
			</div>
		:null}
		</div>

			<div className={classes.inputAddon} onClick={this.searchSelectedMedia}>
				<SearchIcon className={classes.searchIcon} />
			</div>
		</div>
	)
	}
}


const mappedStateToProps = (state) =>(
{
  suggestions:selectData(state.app,'suggestions'),
}
  );


const boundActionCreators = (dispatch) => bindActionCreators({...appOperations,...mediaOperations},dispatch);

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(Search));
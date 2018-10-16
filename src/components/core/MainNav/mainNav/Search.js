import React, {Component} from 'react';

import _ from 'lodash';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as appOperations from '../../../../store/states/app/app.operations';
import * as mediaOperations from '../../../../store/states/media/media.operations';
import {selectData,selectIsProcessing} from '../../../../store/states/app/app.selectors';
import {selectIsProcessing as selectProcessingMedia} from '../../../../store/states/media/media.selectors';

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
	    borderRadius:20,
	    background: theme.palette.primary.lightGrey,
	    transition:'.3s',
	    padding:'0 2rem 0 8px',
	    color:theme.palette.primary.textColor,
	    boxSizing:'border-box',
	    cursor:'pointer',
	    fontFamily:theme.typography.mainFont
	},
	inputFocused:{
	    	minWidth:'23rem',
	    	backgroundColor:'#fff',
	    	outline:'none',
	    	border: '1px solid rgba(50,97,195,.8)',
	    	color:'#000000',
	    	cursor:'text'    
	},
	inputGroup:{
		position:'relative',
		margin:0,
		padding:0
	},
	inputGroupInner:{
		display:'flex',
		height:'1.8rem',
	},
	suggestions:{
		display:'flex',
		flexDirection:'column',
		background:'white',
		position:'absolute',
		left:0,
		width:'100%',
		color:'#000000',
		fontSize:'.9rem',
        boxSizing: 'border-box',
	},
	inputAddon:{
		height:'100%',
		transform:'translateX(-100%)',
		display:'flex',
		justifyContent:'center',
		width:'2rem',
		transition:'.2s',
		borderTopRightRadius:20,
		borderBottomRightRadius:20,
	    boxSizing:'border-box',
	    cursor:'pointer',
	    color:'rgba(50,97,195,.5)',
		pointerEvents:'none'
	},
	inputAddonActive:{
		pointerEvents:'unset',
		borderLeft:'1px solid rgba(50,97,195,.8)',
		'&:hover':{
			color:'rgba(50,97,195,.9)'
		}
	},
	searchIcon:{
		height:'100%'
	},
	disabled:{
		cursor:'not-allowed',
		pointerEvents:'none',
		opacity:'.7'
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
		document.addEventListener('click',this.closeAndUnfocusSearch);
	}

	componentWillUnmount = () => {
				document.removeEventListener('click',this.closeAndUnfocusSearch);	
	}

	closeAndUnfocusSearch = () => {
		this.setState({opened:false,focused:false})
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
		if(!this.props.mediaIsProcessing){
				let {searchText} = this.state;
				this.props.searchMedia(searchText);
		}
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
		const {classes,suggestions,suggestionsProcessing,mediaIsProcessing} = this.props;
		const {searchText,selected,opened,focused} = this.state;
	return (
		<div className={classes.root}>
		<div className={classes.inputGroup}>
		<div className={classes.inputGroupInner}>
				<input type="text" onFocus={this.setFocus} 
				onClick={this.setOpened} ref={this.setInputRef} 
				className={[classes.input,focused ?
				 classes.inputFocused : ''].join(' ')} 
				 placeholder="Search videos..."
				 value={this.state.searchText} 
				 onChange={this.handleChange}/>
				 <div className={[classes.inputAddon,focused ? classes.inputAddonActive : ''].join(' ')} onClick={this.searchSelectedMedia}>
					 <SearchIcon className={classes.searchIcon} />
				</div>
		</div>
				<div className={classes.suggestions}>
				{suggestionsProcessing && <CircularProgress style={{margin:'5px auto'}} size={25} />}
				{(suggestions.length && !selected && opened) ?
					 <div style={{padding:'10px 0'}}>
						{suggestions.map(item=>{
							return <Suggestion selected={this.selectedHandler} item={item.text} searchText={searchText} key={item._id} />							
							
						})}
					</div>
			:null}
		</div>
		</div>


		</div>
	)
	}
}


const mappedStateToProps = (state) =>(
{
  suggestions:selectData(state.app,'suggestions'),
  suggestionsProcessing:selectIsProcessing(state.app,'suggestions'),
  mediaIsProcessing:selectProcessingMedia(state.media.medias,'all')
}
  );


const boundActionCreators = (dispatch) => bindActionCreators({...appOperations,...mediaOperations},dispatch);

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(Search));
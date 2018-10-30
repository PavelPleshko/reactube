import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
		suggestion:{
		padding:'4px 15px',
		transition:'.2s',
		'&:hover':{
			backgroundColor:theme.palette.primary.lightGrey,
			cursor:'pointer'
		}
	}
})

const match = (item,query) =>{
	let matches = [];
	let lastPoint = 0;
	item = item.toLowerCase();
	query = query.toLowerCase();
	while(item.indexOf(query,lastPoint) != -1){
		let start = item.indexOf(query,lastPoint);
		let end = start + query.length;
		lastPoint = end;
		matches.push([start,end]);
	}
	return matches;
}

const parse = (text,matches) => {
	let parsed = [];
	if(matches.length ===0){
		parsed.push({text,highlight:false})
	}else{
		matches.forEach((match,i,arr)=>{
			let start = match[0];
			let end = match[1];
			let sliced = text.slice(start,end);
			if(i===0 && start !== 0){
				parsed.push({
					text:text.slice(0,start),
					highlight:false
				})
			}
			parsed.push({text:sliced,highlight:true});

			let isNextExist = !!(arr[i+1]);
			if(isNextExist && end != arr[i+1][0]){
				let sliced = text.slice(end,arr[i+1][0]);
				parsed.push({
					text:sliced,
					highlight:false
				})
			}else if(!isNextExist){ //means we need a tail here
				parsed.push({
					text:text.slice(end,text.length),
					highlight:false
				})
			}
		})
		

	
	}
	return parsed;
}

class Suggestion extends Component{
	
	state={
		parsed:[]
	};
	
		static getDerivedStateFromProps = (nextProps,prevState) =>{
			let matches = match(nextProps.item,nextProps.searchText);	
			let parsed = parse(nextProps.item,matches);
			return {parsed};
	}

	handleClick = e => {
		e.nativeEvent.stopImmediatePropagation();
		const {itemId,item} = this.props;
		this.props.selected(item);
	}

	render(){
		const {classes} = this.props;

	return (
		<div className={classes.suggestion} onClick={this.handleClick}>
			{this.state.parsed.map((item,i)=>{
				return (

					<span key={i} style={{fontWeight:item.highlight ? 700 : 400,
						background:item.highlight ? 'yellow' : 'transparent'}}>
							{item.text}
						</span>
					)
			})}
		</div>
	)
	}
}


export default withStyles(styles)(Suggestion);
import React, {Component} from 'react';

import {change} from 'redux-form';
import {connect} from 'react-redux';

import FileUpload from '@material-ui/icons/FileUpload';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = theme =>({
		uploadIcon:{
		fontSize:'14rem',
		color:theme.palette.primary.active,
		opacity:'.2',
		
	},
	caption:{
		color:theme.palette.primary.grey
	}
})
class AdjustThumbnail extends Component{
	
	state={
		offset_value:0,
		thumb_url:''
	};
	
	componentWillMount = () => {
		let {thumb_url} = this.props;
		if(thumb_url){
			this.setState({thumb_url})
		}
	}

	getVideoThumb =(startOffset)=>{
		let {secure_url} = this.props.video;
		let urlNoExtension  = secure_url.replace(/\.(mp4|mpeg|avi|3gp)$/gm,'');
		let photoExt = '.jpg';		
		startOffset = startOffset ? `so_${startOffset}` : 'so_0';
		let quality = 'q_35/';
		let thumbUrl = urlNoExtension.replace('/upload/',`/upload/${startOffset}`)+photoExt;
		let lastSlashIdx = thumbUrl.lastIndexOf('/');
		thumbUrl = thumbUrl.slice(0,lastSlashIdx+1)+quality+thumbUrl.slice(lastSlashIdx+1,thumbUrl.length);
		return thumbUrl;
	}

	handleThumbChange = (event,value) =>{
			let thumb_url = this.getVideoThumb(value);
			this.props.dispatch(change('mediaInfo', 'thumb_url', thumb_url));
			this.setState({thumb_url,offset_value:value})
	}

	

	componentDidUpdate = (prevProps,prevState) =>{
		if(prevProps.video != this.props.video){
			let thumb_url = this.props.thumb_url || this.getVideoThumb(this.state.offset_value);
			this.props.dispatch(change('mediaInfo', 'thumb_url', thumb_url));
			this.setState({thumb_url});
		}
	}

	render(){
	 	const {classes,video:{duration}} =this.props;
	 	const {thumb_url,offset_value} = this.state;
	 	
		return (
			<div>
				{thumb_url ? 
				   <div>
				   <h5 className={classes.caption}>Customize thumbnail for your video</h5>
					  <img src={thumb_url} width="100%" height="auto"/>
				   	  <Slider value={offset_value} min={0} max={duration} step={5} onChange={this.handleThumbChange} />
				   </div>
				: <FileUpload className={classes.uploadIcon} />

			}
			</div>
		)
	}
}


export default connect()(withStyles(styles)(AdjustThumbnail));
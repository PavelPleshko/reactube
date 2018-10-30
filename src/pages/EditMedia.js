import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {withStyles} from '@material-ui/core/styles';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {initialize} from 'redux-form';

import * as mediaOperations from '../store/states/media/media.operations';
import {selectSingleMedia} from '../store/states/media/media.selectors';

import FileMetaForm from './newmedia/FileMetaForm';
import AdjustThumbnail from './newmedia/fileUploader/AdjustThumbnail';

const styles = theme =>({
	root:{
		padding:'30px 15%',
		position:'relative'
	},
	header:{
		color:theme.palette.primary.grey,
		textAlign:'center'
	},
	card:{
		padding:'.5rem 2rem',
		textAlign:'center',
		marginRight:'1rem'
	}
});

class EditMedia extends Component{
	
componentDidMount = () =>{
	const {media,initializeMedia} = this.props;
	initializeMedia(media);
}

handleSubmit =(values)=>{	
	this.props.updateMedia(values,this.props.media._id);
}


	render(){
		const {classes,media} = this.props;
	return (
		<Grid container className={classes.root} spacing={16}>
			<Grid item sm={7}>
				<Card className={classes.card}>
					<AdjustThumbnail thumb_url={media.thumb_url} video={{duration:media.duration,secure_url:media.video_url}} />
				</Card>
			</Grid>
			<Grid item sm={5}>
				<FileMetaForm media={media} submitBtnText="Update media" submitForm={this.handleSubmit} />
			</Grid>		
		</Grid>
	)
	}
}



const mapDispatchToProps = (dispatch) => {
    return {
        initializeMedia: (media)=>{
            dispatch(initialize('mediaInfo', media));
        }
    }
}

const  mapStateToProps = (state) => {
    return {
		media:selectSingleMedia(state.media.medias)
		  }
}

const boundActionCreators = (dispatch) => bindActionCreators({
	 initializeMedia: (media)=>{
            return dispatch(initialize('mediaInfo', media));
        },
     ...mediaOperations
},dispatch)

export default connect(mapStateToProps,boundActionCreators)(withStyles(styles)(EditMedia));
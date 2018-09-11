import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckIcon from '@material-ui/icons/Check';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { push } from 'connected-react-router';

import {selectMediaFromResource} from '../../../../store/states/media';
import {selectUser} from '../../../../store/states/user';
import * as userOperations from '../../../../store/states/user/user.operations';
import {transformSeconds,fromNow} from '../../../../utils/pipes/fileDataTransforms';

const styles = theme =>({
	icon: {
    color: theme.palette.primary.grey,
  },
  image:{
    backgroundSize:'cover',
    backgroundPosition:'50% 50%',
    height:130,
    width:'100%',
    position:'relative',
    '&:hover':{
      cursor:'pointer'
    }
  },
  watchlater:{
    position:'absolute',
    left:'.5rem',
    top:'.5rem',
    width:'1.5rem',
    height:'1.5rem',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#ffffff',
    backgroundColor:'#000000',
    borderRadius:3
  },
  hide:{
    display:'none'
  },
  category:{
  	position:'absolute',
  	top:'.5rem',
  	right:'.5rem',
  	backgroundColor:'rgba(255,255,255,.5)',
  	borderRadius:'5px',
  	padding:'0 3px',
  	fontSize:'.9rem'
  },
  duration:{
    position:'absolute',
    padding:'0 4px',
    fontSize:'.9rem',
    borderRadius:'3px',
    backgroundColor:'#000000',
    color:'#ffffff',
    bottom:2,
    right:3
  },
  meta:{
  	display:'flex',
  	flexFlow:'column nowrap',
  	fontSize:'.8rem'
  },
   mediaTitle: {
      whiteSpace: 'normal',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: '#000000',
      fontSize:'.9rem',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': 2,
      fontWeight:500,
      margin:'5px 0',
      maxHeight: '2rem',
      lineHeight: '1rem'
  },
  subheading: {
  	display:'flex',
  	flexDirection:'column',
  	whiteSpace:'no-wrap',
  	color:theme.palette.primary.grey,
  	overflowX:'hidden',
  	textOverflow:'ellipsis',	
  	fontWeight:500
  },
  author:{
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'flex',
    color:theme.palette.primary.grey,
    fontWeight:500,
    opacity:.9,
    marginBottom:'3px',
    '&:hover':{
    	opacity:1,
    	cursor:'pointer'
    }
  },
  date:{
  	marginTop:'3px'
  }
});

class MediaTileItem extends Component{
	
	state = {
    showWatchLater:false,
    addedToWatchlist:false
  }

  handleMouseEnter = (e) =>{
    if(!this.state.showWatchLater){
      this.setState({showWatchLater:true});
    }
  }

  handleMouseLeave = (e) =>{
    if(this.state.showWatchLater){
      this.setState({showWatchLater:false});
    }
  }

  addRemoveFromWatchList = (e) => {
    e.stopPropagation();
    this.props.addToWatchlater(this.props.itemId);
    if(!this.state.addedToWatchlist){
      this.setState({addedToWatchlist:true});
    }else{
      this.setState({addedToWatchlist:false});
    }
  }

  goToResource = () =>{
    const {dispatch,itemId,resourceName} = this.props;
    let url = `${resourceName}/${itemId}`;
    dispatch(push(url));
  }

	render(){
    const {item,classes} = this.props;
    const {showWatchLater,addedToWatchlist} = this.state;

	return (
		<React.Fragment>
            <div className={classes.image}  onClick={this.goToResource} onMouseLeave={this.handleMouseLeave}
             onMouseOver={this.handleMouseEnter} style={{backgroundImage:`url(${item.thumb_url})`}}
                        >
                        <div 
                        onClick={this.addRemoveFromWatchList}
                        className={[classes.watchlater,showWatchLater ? '' 
                        : classes.hide].join(' ')}>
                            {
                            addedToWatchlist ? <CheckIcon /> : 
                            <WatchLaterIcon />
                            }
                        </div>
                       <div className={classes.category}>{item.category && item.category.title}</div>
                       <div className={classes.duration}>{transformSeconds(item.duration)}</div>
                         </div>
                
                          <h3 className={classes.mediaTitle}>{item.title}</h3>
                           <div className={classes.meta}> 
			           		  <div className={classes.author}>{item.postedBy.firstName + ' ' + item.postedBy.lastName}</div>
				           	  <div className={classes.subheading}>
					                <div>{item.views} views </div>
                          <div className={classes.date}>
                            {fromNow(item.created)}
                          </div>
	                		</div>
		              	</div>
                    </React.Fragment>			
	)
	}
}

const boundActionCreators = (dispatch) => bindActionCreators({...userOperations,dispatch},dispatch);
const mapStateToProps = (state,ownProps)=>{
  let itemId = ownProps.itemId;
  let resourceKey = ownProps.resourceKey;
  return {
    item:selectMediaFromResource(state.media.medias,itemId,resourceKey),
    user:selectUser(state.user)
  }
}

export default connect(mapStateToProps,boundActionCreators)
(withStyles(styles)(MediaTileItem));
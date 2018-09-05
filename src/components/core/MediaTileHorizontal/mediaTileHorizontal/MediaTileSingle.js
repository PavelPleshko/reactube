import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {truncate} from '../../../../utils/pipes/truncate';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import {fromNow} from '../../../../utils/pipes/fileDataTransforms';


const styles = theme =>({
	icon: {
    color: theme.palette.primary.grey,
  },
  image:{
  	width:'100%',
    height:'100%',
    backgroundSize:'cover',
    backgroundPosition:'50% 50%',
  	position:'relative'
  },
  imageWrapper:{
    width:'100%',
    height:140
  },
  mediaTitle: {
    whiteSpace: 'normal',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#000000',
    fontSize:'1.2rem',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    fontWeight:500,
    margin:'5px 0',
    maxHeight: '3rem',
    lineHeight: '1.5rem'
  },
  meta:{
    display:'flex',
    fontSize:'.8rem',
    color:theme.palette.primary.grey,
  },
  separator:{
    margin:'0 5px'
  },
  author:{
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'flex',
    fontWeight:500,
    opacity:.9,
    marginBottom:'3px',
    '&:hover':{
    	opacity:1,
    	cursor:'pointer'
    }
  },
  description:{
    marginBottom:8,
    paddingTop:10,
    display: 'block',
    color:theme.palette.primary.grey,
    overflow: 'hidden',
    fontSize: '.9rem',
    fontWeight: 400
   }
});


class MediaTileSingle extends Component{
  
	 shouldComponentUpdate = (nextProps) =>{
    return this.props.item._id !== nextProps.item._id;
  }
  
	render(){
		const {classes,item,resourceName} = this.props;
	return (

		<React.Fragment>
			 <Grid item sm={5}>
						<Link to={`/${resourceName}/${item._id}`}>
	          <div className={classes.imageWrapper}>
	      					  <div className={classes.image} style={{backgroundImage:`url(${item.thumb_url})`}}
	                          >
	                   
	                         </div>
	                         </div>
	                          </Link>
	            </Grid>
	            <Grid item sm={7}>            
	                            <Link to={`/${resourceName}/${item._id}`}>
	                              <h3 className={classes.mediaTitle}>{item.title}</h3>
	                            </Link>
	                           <div className={classes.meta}> 
	      			           		    <div className={classes.author}>{item.postedBy.firstName + ' ' + item.postedBy.lastName}</div>
	      				           	    <div className={classes.separator}>•</div>
	      					              <div>{item.views} views </div>
	                              <div className={classes.separator}>•</div>
	      					              	{fromNow(item.created)}
	      					              
	                           </div>
	                           <div className={classes.description}>
	                             {truncate(120,item.description)}
	                           </div>
	                    
	              </Grid>
		</React.Fragment>
	)
	}
}


export default withStyles(styles)(MediaTileSingle);
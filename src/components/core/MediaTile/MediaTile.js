import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Visible from '@material-ui/icons/Visibility';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const styles = theme =>({
	icon: {
    color: theme.palette.primary.grey,
  },
  gridList:{
  	display:'flex',
  	flexWrap:'wrap',
  	padding:'0 2rem',
  	listStyle:'none'
  },
  image:{
  	backgroundSize:'cover',
	backgroundPosition:'50% 50%',
	height:130,
	width:'100%',
	position:'relative'
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

const mediaTile = (props)=>{
	const {columns=3,items,resourceName="media",classes} = props;
	return (
		<GridList cols={columns} className={classes.gridList} cellHeight={230}>
	
			{items.map(item=>(
				<GridListTile key={item._id} >
					<Link to={`/${resourceName}/${item._id}`}>
					  <div className={classes.image}  style={{backgroundImage:`url(${item.thumb_url})`}}
                        >
                       <div className={classes.category}>{item.category && item.category.title}</div>
                         </div>
                          </Link>
                          <h3 className={classes.mediaTitle}>{item.title}</h3>
                           <div className={classes.meta}> 
			           		  <div className={classes.author}>{item.postedBy.firstName + ' ' + item.postedBy.lastName}</div>
				           	  <div className={classes.subheading}>
					              <div>{item.views} views </div>
					              <div className={classes.date}>
					              	<Moment fromNow>{item.created}</Moment>
					              </div>
	                		  </div>
		              	   </div>
                    
                    
              
				</GridListTile>
				))}

		</GridList>
		)
}


export default withStyles(styles)(mediaTile);
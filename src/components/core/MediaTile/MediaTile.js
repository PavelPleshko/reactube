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
import ReactPlayer from 'react-player'


const styles = theme =>({
	icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gridList:{
  	display:'flex',
  	padding:'2rem'
  },
  image:{
  	backgroundSize:'cover',
	backgroundPosition:'50% 50%',
	height:'100%',
	width:'100%'
  }
});

const mediaTile = (props)=>{
	const {columns=3,items,resourceName="media",classes} = props;
	return (
		<GridList cols={columns} className={classes.gridList} cellHeight={200}>
	
			{items.map(item=>(
				<GridListTile key={item._id} >
					<Link to={`/${resourceName}/${item._id}`}>
					  <div className={classes.image}  style={{backgroundImage:`url(${item.thumb_url})`}}
                        >

                         </div>
                          </Link>
                           <GridListTileBar 
			            title={item.title}
			            subtitle={
			           	  <React.Fragment>
				              <span>{item.views} views </span>
	                		  <span style={{float: 'right'}}>{item.category && item.category.title}</span>
                		  </React.Fragment>
                		} 

                		actionIcon={
		                <IconButton>
		                <Link to={`/${resourceName}/${item._id}`}>
		                  <Visible className={classes.icon} />
		                  </Link>
		                </IconButton>
		              }/>
                    
                    
              
				</GridListTile>
				))}

		</GridList>
		)
}


export default withStyles(styles)(mediaTile);
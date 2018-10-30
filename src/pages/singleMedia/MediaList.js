import React from 'react';
import {Link} from 'react-router-dom'


import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    padding: '0 2.5rem 1.5rem 2.5rem'
  },
  header:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center'
  },
  title: {
    color: '#000000',
    fontSize: '1.1em'
  },
  card: {
    width: '100%',
    display: 'inline-flex'
  },
  details: {
    display: 'inline-block',
    maxWidth: "100%",
    paddingLeft:'5px',
    marginBottom:'7px'
  },
  content: {
    flex: '1 0 auto',
    padding: '5px'
  },
  controls: {
    marginTop: '3px',
    display:'inline-flex',
    flexDirection:'column'
  },
  mediaTitle: {
    whiteSpace: 'normal',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#000000',
    fontSize:'1rem',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    fontWeight:500,
    marginBottom: '5px',
    maxHeight: '2.2rem',
    lineHeight: '1.1rem'
  },
  subheading: {
  	display:'flex',
  	whiteSpace:'no-wrap',
  	color:theme.palette.primary.grey,
  	overflowX:'hidden',
  	textOverflow:'ellipsis',
  	fontSize:'.9rem',
  	fontWeight:300
  },
  category:{
  	color:theme.palette.primary.light
  },
  views: {
    display: 'inline',
    lineHeight: '1',
    paddingLeft: '4px',
    marginBottom: '4px',
    color: theme.palette.primary.grey
  },
  chip:{
  	padding:1,
  	maxHeight:'1rem',
  	fontSize:'.7rem'
  },
  image:{
    backgroundSize:'cover',
    backgroundPosition:'50% 50%',
    height:'100%',
    width:'100%'
  },
  imageWrapper:{
    width:'170px',
    height:'120px',
   
  }
})

const mediaList = (props)=>{
 const {classes,data,title} = props;
	return (
			 <div className={classes.root}>
       <div className={classes.header}>
          <Typography type="title" className={classes.title}>
           {title}
          </Typography>
         
           {props.children}
         
        </div>
          {data.map((item, i) => {
              return <span key={i}>
              <div className={classes.card} >
                <div style={{padding: '7px 7px 7px 0'}}>
              <Link to={"/media/"+item._id}>
              <div className={classes.imageWrapper}>
                <div className={classes.image} style={{backgroundImage:`url(${item.thumb_url})`}}>
                  </div>
              </div>
              </Link>
              </div>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Link to={'/media/'+item._id}>
                            <Typography type="title" component="h3" className={classes.mediaTitle} 
                            color="primary">{item.title}</Typography>
                          </Link>
                          <Typography type="subheading" className={classes.subheading}>
                            {item.postedBy.firstName+' '+item.postedBy.lastName}
                          </Typography>

                          <Typography type="subheading" className={classes.category}>
                            {item.category.title}
                          </Typography>

                        </CardContent>
                        <div className={classes.controls}>
                        <Typography type="subheading" component="h3" className={classes.views} color="primary"> {item.views} views</Typography>
                         <Chip label={item.type} className={classes.chip} />
                        </div>
                      </div>

                    </div>
                    <Divider/>
                    </span>
            })
          }
      </div>

		)
}




export default withStyles(styles)(mediaList)
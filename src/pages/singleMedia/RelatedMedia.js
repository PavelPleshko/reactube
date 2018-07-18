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
  root: theme.mixins.gutters({
    paddingBottom: 24,
  }),
  title: {
    margin: `0 ${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    color: '#000000',
    fontSize: '1.1em'
  },
  card: {
    width: '100%',
    display: 'inline-flex'
  },
  details: {
    display: 'inline-block',
    width: "100%"
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
  date: {
    color: 'rgba(0, 0, 0, 0.4)'
  },
  mediaTitle: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#000000',
    fontSize:'1.15rem',
    fontWeight:500,
    marginBottom: '5px'
  },
  image:{
  	padding:'.5rem',
  	width:'320px'
  },
  subheading: {
  	display:'flex',
  	whiteSpace:'no-wrap',
  	color:theme.palette.primary.grey,
  	overflowX:'hidden',
  	textOverflow:'ellipsis',
  	fontSize:'.9rem',
  	fontWeight:500
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
  }
})

const relatedMedia = (props)=>{
 const {classes,data} = props;
	return (
			 <div className={classes.root}  style={{padding: '16px'}}>
          <Typography type="title" className={classes.title}>
            Up Next
          </Typography>
          {data.map((item, i) => {
              return <span key={i}>
              <div className={classes.card} >
                <div className={classes.image}>
              <Link to={"/media/"+item._id}>
             <div style={{backgroundColor:'#000000'}}>
             	 <img src={item.thumb_url} width='100%' height='100%'/>
            </div>
              </Link>
              </div>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Link to={'/media/'+item._id}><Typography type="title" component="h3" className={classes.mediaTitle} color="primary">{item.title}</Typography></Link>
                          <Typography type="subheading" className={classes.subheading}>
                            {item.postedBy.firstName+' '+item.postedBy.lastName}
                          </Typography>

                          <Typography type="subheading" className={classes.category}>
                            {item.category.title}
                          </Typography>

                        </CardContent>
                        <div className={classes.controls}>
                        <Typography type="subheading" component="h3" className={classes.views} color="primary"> {item.views} views</Typography>
                         <Chip label="Related" className={classes.chip} />
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




export default withStyles(styles)(relatedMedia)
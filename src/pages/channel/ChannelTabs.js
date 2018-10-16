import React,{Component} from 'react';
import {connect} from 'react-redux';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
//victory

import ChannelMedia from './channelTabs/ChannelMedia';
import ChannelThumbnail from './ChannelThumbnail';

const styles = theme => ({
	mainInfo:{

	},
	alignCenter:{
		textAlign:'center'
	},
  tabsContainer:{
    backgroundColor:theme.palette.primary.lightGrey,
    padding:'1rem 2rem 0 2rem'
  },
  metadataContainer:{
    padding:'.5rem 3rem',
    display:'flex',
    alignItems:'center'
  },
  metaWrapper:{
    display:'flex',
    justifyContent:'space-between',
    width:'100%'
  },
  channelTitle:{
    fontSize:'1.5rem',
    lineHeight:'2rem'
  },
  headerBlock:{
    marginLeft:'1rem'
  },

    userSubscribers:{
      fontSize:'1.1rem',
      lineHeight:'2rem',
      color:theme.palette.primary.grey
  },
  subscribeBtn:{
    backgroundColor:theme.palette.primary.active,
    color:'#fff'
  }
});

const TabContainer = ({children}) =>{
	return (<div style={{padding:'1rem 2rem'}}>	
			{children}
		</div>
		)
}



class ChannelTabs extends Component {
 state = {
    activeTab: 0
  };
	

	  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab });
  };

  render(){
  			const {classes,channel} = this.props;
        const channelThumbnail = channel && channel.iconImage;
        const channelId= channel && channel._id;
        const { activeTab } = this.state;
  	return (
  			<div className={classes.mainInfo}>
        <div className={classes.tabsContainer}>
        <div className={classes.metadataContainer}>
           <ChannelThumbnail channelId={channelId} iconImage={channelThumbnail} />
           <div className={classes.metaWrapper}>
             <div className={classes.headerBlock}>
                 <div className={classes.channelTitle}>
                   {channel && channel.title} 
                 </div>
                 {channel && channel.subscribers ?
                  <div className={classes.userSubscribers}>          
                      {`${channel.subscribers.length || 0} subscribers`}  
                  </div>
                  : null
                  }
            </div>
            <div>
              <Button variant="contained" className={classes.subscribeBtn}>
                  {`Subscribe ${(channel && channel.subscribers) && channel.subscribers.length}`}
              </Button>
              </div>
          </div>
       </div>
			 <Tabs
          value={activeTab}
          indicatorColor="secondary"
          textColor="primary"
          onChange={this.handleTabChange}>
            <Tab value={0} label="Main" />          
            <Tab value={1} label="Channel media" />
            <Tab value={2} label="Channel settings" />    
        </Tabs>
        </div>
        	{activeTab === 0 && <TabContainer>
          	<div>
          	  	<h4 className={classes.alignCenter}>
                 Main page
                 </h4>
          	</div>
          </TabContainer>
          }
        	{activeTab === 1 && 
        		<TabContainer>
        		  <ChannelMedia channelId={channelId}/>
        		</TabContainer>
          }
        	{activeTab === 2 && <TabContainer><div>Configurations</div></TabContainer>}
			</div>

  		)
  }
}


export default withStyles(styles)(ChannelTabs);

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
//victory

import ChannelMedia from './channelTabs/ChannelMedia';
import ChannelThumbnail from '../../components/core/Modals/AvatarWithUpdateModal';

import * as channelOperations from '../../store/states/channel/channel.operations';
import {selectProcessing} from '../../store/states/channel';


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
    color:'#fff',
    opacity:.9,
    '&:hover':{
      backgroundColor:theme.palette.primary.active,
      opacity:1
    }
  },
  unsubsribeBtn:{
    backgroundColor:theme.palette.primary.mediumGrey,
    color:theme.palette.primary.grey
  },
  subscribeBtnCont:{
    display:'flex',
    alignItems:'center'
  },
  notificationsIcon:{
    color:theme.palette.primary.grey,
    margin:'0 4px',
    '&:hover':{
      cursor:'pointer'
    }
  },
    tabIndicator:{
    backgroundColor:theme.palette.primary.active
  },
  disabled:{
    opacity:.6,
    '&:hover':{
       opacity:.6,
       cursor:'not-allowed'
    }
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

  updateChannelThumbnail = formData =>{
    if(formData){
      const {updateChannel,channel} = this.props;
      channel && updateChannel(formData,channel._id);
    }
  }

  subscribe = () =>{
    const {subscribeToChannel,channel,isSubscribed,isOwner} = this.props;
    if(channel && !isSubscribed && !isOwner){
      subscribeToChannel(channel._id);
    }
  } 

   unsubscribe = () =>{
    const {unsubscribeFromChannel,channel,isSubscribed,isOwner} = this.props;
    if(channel && isSubscribed && !isOwner){
      unsubscribeFromChannel(channel._id);
    }
  }

  render(){
  			const {classes,channel,processing,isSubscribed,isOwner} = this.props;
        const channelThumbnail = channel && channel.iconImage;
        const channelId= channel && channel._id;
        const { activeTab } = this.state;
  	return (
  			<div className={classes.mainInfo}>
        <div className={classes.tabsContainer}>
        <div className={classes.metadataContainer}>
           <ChannelThumbnail processing={processing} 
           resourceKey="iconImage" 
           avatar={channelThumbnail} 
           submitForm={this.updateChannelThumbnail} />
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
             
              {isSubscribed ?  <div className={classes.subscribeBtnCont}>
              <Button className={classes.unsubsribeBtn} onClick={this.unsubscribe}>
                    {`You are subscribed ${(channel && channel.subscribers) && channel.subscribers.length}`}
                </Button>
                <NotificationsIcon className={classes.notificationsIcon} />
              </div>
              :
              <Tooltip title={isOwner && `You can't subscribe to your own channel`}>
                <Button variant="contained" className={[classes.subscribeBtn,isOwner ? classes.disabled : ''].join(' ')} onClick={this.subscribe}>
                    {`Subscribe ${(channel && channel.subscribers) && channel.subscribers.length}`}
                </Button>
              </Tooltip>
            }
              </div>
          </div>
       </div>
			 <Tabs
          value={activeTab}
          classes={{indicator:classes.tabIndicator}}
          textColor="primary"
          onChange={this.handleTabChange}>
            <Tab value={0} label="Home" />          
            <Tab value={1} label="Media" />
            <Tab value={2} label="Settings" />    
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

const mappedStateToProps = (state) =>(
{
  processing:selectProcessing(state.channel,'single')
}
  );


const boundActionCreators = (dispatch) => bindActionCreators({...channelOperations},dispatch);


export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(ChannelTabs));

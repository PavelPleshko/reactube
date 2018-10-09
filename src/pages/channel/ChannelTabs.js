import React,{Component} from 'react';
import {connect} from 'react-redux';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
//victory

import ChannelMedia from './channelTabs/ChannelMedia';


const styles = theme => ({
	mainInfo:{

	},
	alignCenter:{
		textAlign:'center'
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
  			const {classes,channelId} = this.props;

const { activeTab } = this.state;
  	return (
  			<div className={classes.mainInfo}>
			 <Tabs
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleTabChange}
        >
          <Tab value={0} label="Channel stats" />          
          <Tab value={1} label="Channel media" />
          <Tab value={2} label="Channel settings" />    
        </Tabs>
        	{activeTab === 0 && <TabContainer>
        	<div>
        		<h4 className={classes.alignCenter}>Your statistics</h4>

        	</div></TabContainer>}
        	{activeTab === 1 && 
        		<TabContainer>
        		  <ChannelMedia channelId={channelId}/>
        		</TabContainer>}
        	{activeTab === 2 && <TabContainer><div>Configurations</div></TabContainer>}
			</div>

  		)
  }
}


export default withStyles(styles)(ChannelTabs);

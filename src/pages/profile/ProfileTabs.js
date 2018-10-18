import React,{Component} from 'react';
import {connect} from 'react-redux';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
//victory
import { VictoryPie } from 'victory';


import ProfileChannels from './profileTabs/ProfileChannels';


const colorMap = {
	1:'blue',
	2:'purple'
};


const styles = theme => ({
	mainInfo:{

	},
	alignCenter:{
		textAlign:'center'
	},
  tabIndicator:{
    backgroundColor:theme.palette.primary.active
  }
});

const TabContainer = ({children}) =>{
	return (<div style={{padding:'1rem 2rem',backgroundColor:'#fff'}}>	
			{children}
		</div>
		)
}



class ProfileTabs extends Component {
 state = {
    activeTab: 0
  };
	

	  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab });
  };

  render(){
  			const {classes, userId} = this.props;

const { activeTab } = this.state;
  	return (
  			<div className={classes.mainInfo}>
			 <Tabs
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleTabChange}
          classes={{indicator:classes.tabIndicator}}
          >
            <Tab value={0} label="My stats" />          
            <Tab value={1} label="My channels" />
            <Tab value={2} label="Main settings" />    
        </Tabs>
        	{activeTab === 0 && <TabContainer>
        	<div>
        		<h4 className={classes.alignCenter}>Your statistics</h4>
        		<Grid container>
        			<Grid item sm={4}>
        			<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        				<div>New subscribers</div>
        				<div style={{width:200,height:200}}>
	        				 <svg viewBox="0 0 300 300">
	        				 	<VictoryPie standalone={false}
	        				 	width={300} height={300}
	        				 	innerRadius={65}
	        				 	labelRadius={80}
	        				 	 data={[
	            { x: 5, y: 5 ,idx:1}, { x: 10, y: 10,idx:2 }
	          ]}
	          style={{
              data: { fill: (d) => {
               return colorMap[d.idx];
              }
              },
              labels:{
              	fill:'white',
              	fontSize:18
              }
            }}
	        				 	/>
	        				 </svg>
        				 </div>
        				 </div>
        			</Grid>

        			<Grid item sm={4}>
						
						<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        			<div>New views</div>
        				<div style={{width:200,height:200}}>
	        				 <svg viewBox="0 0 300 300">
	        				 	<VictoryPie standalone={false}
	        				 	width={300} height={300}
	        				 	innerRadius={65}
	        				 	labelRadius={80}
	        				 	 data={[
	            { x: 5, y: 5 ,idx:1}, { x: 10, y: 10,idx:2 }
	          ]}
	          style={{
              data: { fill: (d) => {
               return colorMap[d.idx];
              }
              },
              labels:{
              	fill:'white',
              	fontSize:18
              }
            }}
	        				 	/>
	        				 </svg>
        				 </div>
        				 </div>
        			</Grid>  
        			<Grid item sm={4}>
						
						<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        				<div>New something</div>
        				<div style={{width:200,height:200}}>
	        				 <svg viewBox="0 0 300 300">
	        				 	<VictoryPie standalone={false}
	        				 	width={300} height={300}
	        				 	innerRadius={65}
	        				 	labelRadius={80}
	        				 	 data={[
	            { x: 5, y: 5 ,idx:1}, { x: 10, y: 10,idx:2 }
	          ]}
	          style={{
              data: { fill: (d) => {
               return colorMap[d.idx];
              }
              },
              labels:{
              	fill:'white',
              	fontSize:18
              }
            }}
	        				 	/>
	        				 </svg>
        				 </div>
        				 </div>
        			</Grid>
        		</Grid>

        	</div></TabContainer>}
        	{activeTab === 1 && 
        		<TabContainer>
        			<ProfileChannels userId={userId} />
        		</TabContainer>}
        	{activeTab === 2 && <TabContainer><div>Configurations</div></TabContainer>}
			</div>

  		)
  }
}


export default withStyles(styles)(ProfileTabs);

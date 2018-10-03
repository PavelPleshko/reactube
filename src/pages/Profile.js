import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectUser,selectUserFullname} from '../store/states/user/user.selectors';
import {selectMedias} from '../store/states/media/media.selectors';
import * as mediaOperations from '../store/states/media/media.operations';


//meterial ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles} from '@material-ui/core/styles';

//victory
import { VictoryPie } from 'victory';
import UserAvatarBig from '../components/UI/miscellaneous/UserAvatarBig/UserAvatarBig';
import MediaTile from '../components/core/MediaTile/MediaTile';

const styles = theme => ({
	root:{
		
	},
	profileMeta:{
		display:'flex',
		justifyContent:'space-between',
		alignItems:'center',
		padding:'1rem 2rem',
		backgroundColor:'#fafafa'
	},
	avatarGroup:{
		display:'flex',
		alignItems:'center'
	},
	userFullname:{
		fontSize:'1.1rem',
		fontWeight:500,
		marginLeft:5
	},
	userSubscribers:{
		fontSize:'1.1rem',
		display:'flex',
		alignItems:'center'
	},
	subscribersNumber:{
		color:theme.palette.primary.light,
		fontSize:'1.9rem',
		fontWeight:200,
		marginRight:5
	},
	icon:{
		color:theme.palette.primary.light
	},
	mainInfo:{

	},
	alignCenter:{
		textAlign:'center'
	}
});

const colorMap = {
	1:'blue',
	2:'purple'
};

const TabContainer = ({children}) =>{
	return (<div style={{padding:'1rem 2rem'}}>	
			{children}
		</div>
		)
}

class Profile extends Component{
 state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
	componentDidMount = () =>{
		this.props.listUserMedia();
	}
	
	render(){
		const {classes,user,userFullName,userMedias} = this.props;
		const { value } = this.state;
	return (
		<Paper elevation={2} className={classes.root}>
			<div className={classes.profileMeta}>
				<div className={classes.avatarGroup}>
					<UserAvatarBig user={user || {}} classes={{icon:classes.icon}} />		
					<div className={classes.userFullname}>{userFullName}</div>
				</div>
				{user && user.subscribed ?
				<div className={classes.userSubscribers}>
					<span className={classes.subscribersNumber}>
						{user.subscribed.length}
					</span>
					<span>
						subscribers
					</span>
				</div>
				: null
			}
			</div>
			<div className={classes.mainInfo}>
			 <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab value={0} label="Main" />
          <Tab value={1} label="Subscriptions" />
          <Tab value={2} label="My videos" />
        </Tabs>
        	{value === 0 && <TabContainer>
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
        	{value === 1 && <TabContainer><div>You are not subscribed to anything yet</div></TabContainer>}
        	{value === 2 && <TabContainer><MediaTile resourceKey="user" items={userMedias} columns={4} /></TabContainer>}
			</div>
		</Paper>
	)
	}
}

const mappedStateToProps = (state) =>(
{
  user:selectUser(state.user),
  userFullName:selectUserFullname(state.user),
  userMedias:selectMedias(state.media.medias,'user')
}
  );
const boundActionCreators = (dispatch) => bindActionCreators({...mediaOperations},dispatch);


export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(Profile));
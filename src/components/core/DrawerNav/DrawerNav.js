import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as appOperations from '../../../store/states/app/app.operations';
import * as channelOperations from '../../../store/states/channel/channel.operations';
import {selectSubscribedChannels} from '../../../store/states/channel';
import {selectDrawerOpened} from '../../../store/states/app';
import {selectPathname} from '../../../store/states/router';
import {selectIsAuthenticated} from '../../../store/states/user';
import {primaryMenu,secondaryMenu} from '../../../settings/drawer/drawerMenu';
import Logo from '../../UI/miscellaneous/Logo/Logo';
import Subscriptions from './drawerNav/Subscriptions';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
    zIndex:1100,
    backgroundColor:'#f5f5f5',
    paddingBottom:'1rem',
    transform:'translate3d(0,0,0)',
  },
  backdrop:{
    backgroundColor:'rgba(0,0,0,.6)',
    position:'fixed',
    width:'100%',
    height:'100%',
    left:0,
    top:0,
    right:0,
    bottom:0,
    zIndex:1099,
  },
  drawerPaperHome:{
    zIndex:2,
    paddingTop:'5rem',
    position:'fixed'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    position:'relative',
    padding: '0 0 0 5rem',
    height:'4rem',
    ...theme.mixins.toolbar
  },
  noTransition:{
    transition:'-webkit- !important'
  },
  content: {
    flexGrow: 1
  },
  'content-left': {
    marginLeft: 0,
  },
  'contentShift-left': {
    marginLeft: drawerWidth,
  },
  menuIcon:{
    position:'absolute',
    left:'2rem',
    top:'50%',
    transform:'translateY(-50%)'
  },
  logo:{
    height:'3rem'
  },
  active:{
    color:`${theme.palette.primary.active}`,
    fontWeight:700
  },
  backgroundActive:{
   backgroundColor: 'rgba(0, 0, 0, 0.08)',
   borderRight:`4px solid ${theme.palette.primary.active}`
  },
  listItem:{
       fontFamily:theme.typography.mainFont
  }
});

const isActive = (activePath, path) => {
  return activePath === path;
}

class DrawerNav extends Component {


 persistentDrawer = (history, paths) => {
   let currLocation = history.location.pathname;
   let persistent = false;
   paths.forEach(path => {
    if(!persistent){
      persistent = new RegExp(path).test(currLocation);
    }
    });
   if(currLocation === '/'){
    persistent = true;
   }
   return persistent;
  }

  handleDrawerClose = () => {
    this.props.toggleDrawer();
  }

  componentDidMount = () =>{
    this.updateSubscriptions();
  }

  componentDidUpdate = (prevProps) =>{
    if(prevProps.location && prevProps.location.pathname !== this.props.location.pathname){
      if(!this.persistentDrawer(this.props.history,['/search/medias','/history/medias','/user/me','/channel/*'])){
        this.props.closeDrawer();
      }else{
        this.props.openDrawer();
      }
    }
    this.updateSubscriptions();
  }

  updateSubscriptions = (prevProps)=>{
    const {authenticated,subscriptions,getUserSubscriptions} = this.props;
    if(authenticated && !subscriptions){
      getUserSubscriptions();
    }
  }

  render() {
    const { classes, theme,drawerOpened,history,pathName,subscriptions,authenticated} = this.props;
    const isPersistentDrawer = this.persistentDrawer(history,['/search/medias','/history/medias','/user/me','/channel/*']);
    const drawer = (
      <Drawer
        variant="persistent"
        open={drawerOpened}
        classes={{
          paper: [classes.drawerPaper,isPersistentDrawer ? classes.drawerPaperHome+' '+classes.noTransition : ''].join(' '),
        }}
      >
        {!isPersistentDrawer && <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose} className={classes.menuIcon}>
             <MenuIcon />
          </IconButton>
          <span className={classes.logo}>
             <Logo />
          </span>
        </div>}
        <List>
          {primaryMenu.map(item=>{
            return <Link key={item.title} to={item.link}>
                      <ListItem button className={isActive(pathName,item.link) ? classes.backgroundActive : ''}>
                      {item.icon && <ListItemIcon className={isActive(pathName,item.link) ? classes.active : ''}>
                        {item.icon}
                      </ListItemIcon>}
                      <ListItemText classes={{primary:[classes.listItem,isActive(pathName,item.link) ? classes.active : ''].join(' ')}} primary={item.title} />
                    
                    </ListItem>
                   </Link>
          })}
        </List>
        <Divider />
        <List subheader={<ListSubheader component="div">Library</ListSubheader>}>
           {secondaryMenu.map(item=>{
            return <Link key={item.title} to={item.link}>
                      <ListItem button className={isActive(pathName,item.link) ? classes.backgroundActive : ''}>
                      {item.icon && <ListItemIcon className={isActive(pathName,item.link) ? classes.active : ''}>
                        {item.icon}
                      </ListItemIcon>}
                      <ListItemText classes={{primary:[classes.listItem,isActive(pathName,item.link) ? classes.active : ''].join(' ')}} primary={item.title} />
                    </ListItem>
                   </Link>
          })}
        </List>
        {authenticated && <Subscriptions subscriptions={subscriptions} />}
      </Drawer>
    );



    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
      
        {drawer}
        {(!isPersistentDrawer && drawerOpened) && <div onClick={this.handleDrawerClose} className={classes.backdrop}>
        </div>}
          <main
            className={classNames(classes.content, isPersistentDrawer ? 
              classes[`content-left`] : '', {
              [classes.contentShift]: drawerOpened && isPersistentDrawer,
              [classes[`contentShift-left`]]: drawerOpened && isPersistentDrawer,
            })}
          >
            <div className={classes.drawerHeader} />
              {this.props.children}
          </main>
         
        </div>
      </div>
    );
  }
}

const mappedStateToProps = (state) =>(
{
  drawerOpened:selectDrawerOpened(state.app),
  pathName:selectPathname(state.router),
  subscriptions:selectSubscribedChannels(state.channel),
  authenticated:selectIsAuthenticated(state.user)
}
  );


const boundActionCreators = (dispatch) => bindActionCreators({...appOperations,...channelOperations},dispatch);


export default connect(mappedStateToProps,boundActionCreators)
(withStyles(styles, { withTheme: true })(withRouter(DrawerNav)));
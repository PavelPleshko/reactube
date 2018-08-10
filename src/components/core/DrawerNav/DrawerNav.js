import React from 'react';
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
import {selectDrawerOpened} from '../../../store/states/app';
import {primaryMenu,secondaryMenu} from '../../../settings/drawer/drawerMenu';

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
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
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
    position:'relative'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    position:'relative',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height:'4rem',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  menuIcon:{
    position:'absolute',
    left:'2rem',
    top:'50%',
    transform:'translateY(-50%)'
  }
});

class DrawerNav extends React.Component {


 persistentDrawer = (history, paths) => {
   let currLocation = history.location.pathname;
    return paths.includes(currLocation);
  }

  handleDrawerClose = () => {
    this.props.toggleDrawer();
  }

  componentDidUpdate = (prevProps) =>{
    if(prevProps.location && prevProps.location.pathname !== this.props.location.pathname){
      if(!this.persistentDrawer(this.props.history,['/','/search/medias','/history/medias'])){
        this.props.closeDrawer();
      }else{
        this.props.openDrawer();
      }
    }

  }

  render() {
    const { classes, theme,drawerOpened,history} = this.props;
    const isPersistentDrawer = this.persistentDrawer(history,['/','/search/medias','/history/medias']);
    const drawer = (
      <Drawer
        variant="persistent"
        open={drawerOpened}
        classes={{
          paper: [classes.drawerPaper,isPersistentDrawer ? classes.drawerPaperHome : ''].join(' '),
        }}
      >
        {!isPersistentDrawer && <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose} className={classes.menuIcon}>
             <MenuIcon />
          </IconButton>
        </div>}
        <List>
          {primaryMenu.map(item=>{
            return <Link key={item.title} to={item.link}>
                      <ListItem button>
                      {item.icon && <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>}
                      <ListItemText primary={item.title} />
                    </ListItem>
                   </Link>
          })}
        </List>
        <Divider />
        <List subheader={<ListSubheader component="div">Library</ListSubheader>}>
           {secondaryMenu.map(item=>{
            return <Link key={item.title} to={item.link}>
                      <ListItem button>
                      {item.icon && <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>}
                      <ListItemText primary={item.title} />
                    </ListItem>
                   </Link>
          })}
        </List>
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
}
  );


const boundActionCreators = (dispatch) => bindActionCreators({...appOperations},dispatch);


export default connect(mappedStateToProps,boundActionCreators)
(withStyles(styles, { withTheme: true })(withRouter(DrawerNav)));
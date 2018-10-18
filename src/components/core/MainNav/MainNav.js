import React,{Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as appOperations from '../../../store/states/app/app.operations';
import * as userOperations from '../../../store/states/user/user.operations';
import {selectUser} from '../../../store/states/user';
import {selectPathname} from '../../../store/states/router';
//material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddVideoIcon from '@material-ui/icons/VideoCall';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
//router
import {Link, withRouter} from 'react-router-dom';

import UserAvatarSmall from '../../UI/miscellaneous/UserAvatarSmall/UserAvatarSmall';
import Search from './mainNav/Search';
import Logo from '../../UI/miscellaneous/Logo/Logo';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:theme.palette.primary.light,
    boxShadow:'0px 0px 2px 2px rgba(0,0,0,.1)',
    position:'fixed',
    left:0,
    top:0,
    maxHeight:'4rem',
    height:'4rem',
    zIndex:50
  },
  logo:{
    height:'3rem'
  },
  flex: {
    flex: 1,
  },
  rootContainer:{
    display:'flex',
    justifyContent:'space-between',
    color:'#fff',
    paddingLeft:'5rem'
  },
  leftContainer:{
    display:'flex',
    alignItems:'center'
  },
  icon:{
    marginLeft:'.5rem',
    color: theme.palette.primary.textColor,
  },
  iconActive:{
    marginLeft:'.5rem',
    color: theme.palette.primary.textColor,
    textShadow:'1px 1px 3px rgba(0,0,0,.3)'
  },
  menuIcon:{
    position:'absolute',
    left:'2rem',
    top:'50%',
    transform:'translateY(-50%)',
    zIndex:55
  },
  avatarContainer:{
    display:'flex',
    alignItems:'center'
  }
});


const isActive = (activePath, path) => {
  return activePath === path;
}


class MainNav extends Component {

state = {
  anchorEl:null
}


 handleOpenProfileDropdown = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

 handleCloseProfileDropdown = () => {
    this.setState({ anchorEl: null });
  };

  openDrawerNav = () => {
    this.props.toggleDrawer();
  }

  logoutUser = () => {
    const {logout} = this.props;
    logout();
    this.handleCloseProfileDropdown();
  }



  render(){
    const open = !!(this.state.anchorEl);
    const {classes,user,pathname} = this.props;
    return (
  <AppBar position="fixed" className={classes.root}>
      <IconButton onClick={this.openDrawerNav} className={classes.menuIcon}>
        <MenuIcon />
      </IconButton>
    <Toolbar className={classes.rootContainer}>
      <div className={classes.leftContainer}>
        <span className={classes.logo}>
           <Logo />
      </span>
         <span>
          <Link to="/add/media">         
               <AddVideoIcon className={[classes.icon,isActive(pathname, "/add/media") ?
                classes.iconActive : ''].join(' ')}/>              
          </Link>
        </span>
        </div>
        <Search />
        <div className={classes.avatarContainer}>
         {
            user && (
              user.token &&
              <React.Fragment>
                <div>Hi, <strong>{user.firstName}</strong></div>
                 <UserAvatarSmall handleClick={this.handleOpenProfileDropdown} user={user}/>
                  <Menu 
                  id="menu-appbar" 
                  anchorEl={this.state.anchorEl} 
                  anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                  transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                  open={open}
                  onClose={this.handleCloseProfileDropdown}>
                           <MenuItem onClick={this.handleCloseProfileDropdown}>
                           <Link to="/user/me">My Profile</Link>
                          </MenuItem>
                          <MenuItem onClick={this.logoutUser}>
                            Logout
                          </MenuItem>
                 </Menu>
           </React.Fragment>
        )}
         {
                  !user && (
                    <span>
                    <Link to="/signup">
                      <Button>Sign up
                      </Button>
                    </Link>
                    <Link to="/signin">
                      <Button>Sign In
                      </Button>
                    </Link>
                  </span>)
        }
           </div>
    </Toolbar>
  </AppBar>

  )
  }

}
  

const mapStateToProps = (state)=>{
  return {
    user:selectUser(state.user),
    pathname:selectPathname(state.router)
  }
}


const boundActionCreators = (dispatch) => bindActionCreators({...appOperations,...userOperations},dispatch);


export default connect(mapStateToProps,boundActionCreators)(withRouter(withStyles(styles)(MainNav)));
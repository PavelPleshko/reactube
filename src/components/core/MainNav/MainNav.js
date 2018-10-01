import React,{Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as appOperations from '../../../store/states/app/app.operations';
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
    boxShadow:'1px 1px 3px 0px rgba(0,0,0,.3)',
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
    marginRight:'.3rem'
  },
  menuIcon:{
    position:'absolute',
    left:'2rem',
    top:'50%',
    transform:'translateY(-50%)',
    zIndex:55,
    color:'#ffffff'
  },
  avatarContainer:{
    display:'flex',
    alignItems:'center'
  }
});


const isActive = (activePath, path) => {
  if (activePath == path)
    return {color: '#fff',fontWeight:900,textShadow:'1px 1px 3px rgba(0,0,0,.3)'}
  else
    return {color: '#fff',textShadow:'1px 1px 3px rgba(0,0,0,.3)'}
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



  render(){
    const open = Boolean(this.state.anchorEl);
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
            <Button style={isActive(pathname, "/add/media")}>
               <AddVideoIcon className={classes.icon} />              
              Add media
            </Button>
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
                          <MenuItem onClick={this.handleCloseProfileDropdown}>
                            Logout
                          </MenuItem>
                 </Menu>
           </React.Fragment>
        )}
         {
                  !user && (
                    <span>
                    <Link to="/signup">
                      <Button style={isActive(pathname, "/signup")}>Sign up
                      </Button>
                    </Link>
                    <Link to="/signin">
                      <Button style={isActive(pathname, "/signin")}>Sign In
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


const boundActionCreators = (dispatch) => bindActionCreators({...appOperations},dispatch);


export default connect(mapStateToProps,boundActionCreators)(withRouter(withStyles(styles)(MainNav)));
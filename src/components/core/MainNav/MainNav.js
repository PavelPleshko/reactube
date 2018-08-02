import React,{Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as appOperations from '../../../store/states/app/app.operations';
import {selectUser} from '../../../store/states/user';
//material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloudUpload from '@material-ui/icons/CloudUpload';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
//router
import {Link, withRouter} from 'react-router-dom';

import UserAvatarSmall from '../../UI/miscellaneous/UserAvatarSmall/UserAvatarSmall';
import Search from './mainNav/Search';

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
  }

});


const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#dedede'}
  else
    return {color: '#fff'}
}


class NavMenu extends Component {

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
    const {classes,user,history} = this.props;
    return (
  <AppBar position="fixed" className={classes.root}>
      <IconButton onClick={this.openDrawerNav} className={classes.menuIcon}>
        <MenuIcon />
      </IconButton>
    <Toolbar className={classes.rootContainer}>
      <div className={classes.leftContainer}>
      
      <Typography type="title">
        Reactube
      </Typography>
         <span>
          <Link to="/add/media">
            <Button style={isActive(history, "/add/media")}>
               <CloudUpload className={classes.icon} />              
              Add media
            </Button>
          </Link>
        </span>
        </div>
        <Search />
        <div>
         {
            user && (
              user.token &&
              <React.Fragment>
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
                           <MenuItem>
                           <Link to={"/user/" + user._id}>My Profile</Link>
                          </MenuItem>
                          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                 </Menu>
           </React.Fragment>
        )}
         {
                  !user && (
                    <span>
                    <Link to="/signup">
                      <Button style={isActive(history, "/signup")}>Sign up
                      </Button>
                    </Link>
                    <Link to="/signin">
                      <Button style={isActive(history, "/signin")}>Sign In
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
    user:selectUser(state.user)
  }
}


const boundActionCreators = (dispatch) => bindActionCreators({...appOperations},dispatch);


export default connect(mapStateToProps,boundActionCreators)(withRouter(withStyles(styles)(NavMenu)));
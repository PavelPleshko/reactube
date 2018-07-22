import React,{Component} from 'react';
import { connect } from 'react-redux';
import {selectUser} from '../../../store/states/user';
//material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import CloudUpload from '@material-ui/icons/CloudUpload';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//router
import {Link, withRouter} from 'react-router-dom';

import UserAvatarSmall from '../../UI/miscellaneous/UserAvatarSmall/UserAvatarSmall';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  rootContainer:{
    display:'flex',
    justifyContent:'space-between',
    color:'#fff'
  },
  leftContainer:{
    display:'flex',
    alignItems:'center'
  },
  icon:{
    marginRight:'.3rem'
  }

};


const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ffa726'}
  else
    return {color: '#ffffff'}
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


  render(){
    const open = Boolean(this.state.anchorEl);
    const {classes,user,history} = this.props;
console.log(user);
    return (
  <AppBar position="static" className={classes.root}>
    <Toolbar className={classes.rootContainer}>
      <div className={classes.leftContainer}>
      <Typography type="title" color="inherit">
        Reactube
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")} className={classes.icon}>
          <HomeIcon/>
        </IconButton>
      </Link> 
         <span>
          <Link to="/add/media">
            <Button style={isActive(history, "/add/media")}>
               <CloudUpload color="inherit" className={classes.icon} />
                   
              Add media
            </Button>
          </Link>
        </span>
        </div>
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



export default connect(mapStateToProps)(withRouter(withStyles(styles)(NavMenu)));
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, Divider, } from "@material-ui/core";
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textAlign: "center",
    [theme.breakpoints.up('xs')]: {
      fontSize: 35
    },
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navbar: {
    backgroundColor: "#00e676",
    width: "100%"
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      sideNav: false
    }
  }

  toggleDrawer = (open) => () => {
    this.setState({
      sideNav: open
    })
  }

  render() {
    const { classes } = this.props;
    const sideNav = (
      <div className={classes.list}>
        <List>
            <ListItem to="/" component={Link} button onClick={this.toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
          <Divider />
          <ListItem to="/profile" component={Link} button onClick={this.toggleDrawer(false)}>
            <ListItemText primary="Profile" />
          </ListItem>
          <Divider />
          <ListItem to="/forum" component={Link} button onClick={this.toggleDrawer(false)}>
            <ListItemText primary="Forum" />
          </ListItem>
          <Divider />
          <ListItem to="/news" component={Link} button onClick={this.toggleDrawer(false)}>
            <ListItemText primary="News" />
          </ListItem>
          <Divider />
        </List>
      </div>
    )
    return (
      <div className={classes.root}>
        <AppBar className={classes.navbar} position="static">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="display2" color="inherit" className={classes.grow}>
              Bar Book
            </Typography>
            <Button className={classes.loginButton} color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </Toolbar>
          <Drawer open={this.state.sideNav} onClose={this.toggleDrawer(false)}>
              {sideNav}
          </Drawer>
        </AppBar>
      </div>
    )
  };
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
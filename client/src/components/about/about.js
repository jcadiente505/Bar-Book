import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';

const styles = {
    header: {
        color: "white",
        textAlign: "center",
        marginTop: 25,
        lineHeight: 1.5,
        padding: 6
        },
        divider: {
            backgroundColor: "white",
            marginRight: 30,
            marginLeft: 30
        }
    }

const About = props => {
    const { classes } = props;
    return (
      <div>
          <Typography variant="display2" className={classes.header}>
            About Us
          </Typography>
          <Divider className={classes.divider}/>
          <Typography variant="title" className={classes.header}>
            An online recipe book for cocktail enthusiasts.  
          </Typography>
      </div>
    )
  }

  About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider, Card, CardActions, CardContent, Button } from '@material-ui/core';
import Background from '../../images/cocktail.jpg'

const styles = {
    jumbotron: {
        height: 250,
        width: "100%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "white",
    },
    title: {
        fontFamily: "Lobster, cursive",
        color: "white",
        textAlign: "center",
        paddingTop: 35
    },
    card: {
        width: 175,
        height: 100,
    }
}

const Header = props => {
    const { classes } = props;
    return (
        <div>
            <Paper className={classes.jumbotron}>
                <Typography variant="display4" className={classes.title}>
                    Bar Book!
                </Typography>
            </Paper>
        </div>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);





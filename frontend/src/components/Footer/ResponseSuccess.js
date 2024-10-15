import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
      paper: {
        height: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DBE2E9',
      },
    }));

function ResponseSuccess(){
    const classes = useStyles();
    return (<Paper className={classes.paper}>
        <Typography variant="h6" color="primary" gutterBottom>Your response has been recorded successfully!</Typography>
    </Paper>)
}

ResponseSuccess.propTypes = {};

export default ResponseSuccess;

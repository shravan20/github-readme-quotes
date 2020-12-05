import React, { useState, useEffect } from 'react';
import {
    Paper,
    TextField,
    Grid,
    Button,
    Snackbar,
    Slide,
    CircularProgress
} from '@material-ui/core';

const TemplateCard = (props) => {

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [isImageLoaded, setImageLoaded] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('![Quote](' + quoteUrl + ')').then(() => {
            setSnackbarMessage('Copied to Clipboard!');
            setShowSnackbar(true);
        }).catch(() => {
            setSnackbarMessage('Unable to copy');
            setShowSnackbar(true);
        })
    }

    const handleSnackbarClose = () => {
        setShowSnackbar(false);
    }

    const quoteUrl = `https://github-readme-quotes.herokuapp.com/quote?theme=${props.theme}&animation=${props.animation}&layout=${props.layout}`;

    function SlideTransition(props) {
        return <Slide {...props} direction="up" />;
    }

    useEffect(() => {
        setImageLoaded(false);
    }, [quoteUrl])

    return (
        <Paper  style={{ 'padding': '10px' }}>
            <div style={{ textAlign: 'center' }}>
                <img 
                src={quoteUrl}
                    alt="Dynamic Quote for Github Readme"
                    onLoad={() => setImageLoaded(true)} style={{width: '100%', display:isImageLoaded ? '' : 'none'}} />
                <CircularProgress color="secondary" style={{display:isImageLoaded ? 'none' : ''}}/>
            </div>
            <Grid container
                alignContent="center"
                style={{margin:'20px'}}
            >
                <Grid item sm={8} xs={12}>
                    <TextField fullWidth value={'![Quote](' + quoteUrl + ')'}></TextField>
                </Grid>
                <Grid item sm={4} xs={12} style={{textAlign: 'center'}}>
                    <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                        onClick={() => {
                            copyToClipboard();
                        }}>Copy Text</Button>
                </Grid>
            </Grid>

            <Snackbar
                open={showSnackbar}
                TransitionComponent={SlideTransition}
                message={snackbarMessage}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                key={'up'}
            />
        </Paper>
    )
}

export default TemplateCard;
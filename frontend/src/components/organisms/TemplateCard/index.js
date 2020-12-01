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
        navigator.clipboard.writeText(quoteUrl).then(() => {
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
        <Paper elevation={0} style={{ 'margin': '10px' }}>
            <div style={{ textAlign: 'center' }}>
                <img src={quoteUrl}
                    alt="Dynamic Quote for Github Readme"
                    onLoad={() => setImageLoaded(true)} style={{display:isImageLoaded ? '' : 'none'}} />
                <CircularProgress color="secondary" style={{display:isImageLoaded ? 'none' : ''}}/>
            </div>
            <Grid container
                alignContent="center"
                spacing={3}
            >
                <Grid item xs={8}>
                    <TextField fullWidth id="quoteUrl" value={quoteUrl}></TextField>
                </Grid>
                <Grid item xs={4}>
                    <Button
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
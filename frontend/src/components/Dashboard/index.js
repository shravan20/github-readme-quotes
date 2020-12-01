import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import { dashConstants } from '../../config/constants';
import Home from '../Pages/Home';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

function Dashboard(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">{dashConstants.APP_NAME}</Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <Container style={{backgroundColor:'white'}}>
                <Home/>
            </Container>
        </React.Fragment>
    );
}

export default Dashboard;

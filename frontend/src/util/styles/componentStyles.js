import { makeStyles } from '@material-ui/core';

export const getAppBarStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    themeIcon: {
        backgroundColor: 'transparent !important',
        height: '38px',
        width: '38px',
        boxShadow: '0px 0px 0.5px 0.5px #6e7681',
    },
    productHuntBtn: {
        flexGrow: 1,
    },
}));

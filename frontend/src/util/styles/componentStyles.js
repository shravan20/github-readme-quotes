import { makeStyles } from "@material-ui/core";

export const getAppBarStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    themeIcon:{
        backgroundColor:"transparent !important",
        border:"none",
        boxShadow:"1px solid #fff"
    }
  }));
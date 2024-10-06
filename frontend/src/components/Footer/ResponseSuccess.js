import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const ResponseSuccess = ()=>
    <Paper style={{height:'90%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#DBE2E9'}}>
        <Typography variant="h6" color="primary" gutterBottom>Your response has been recorded successfully!</Typography>
    </Paper>

export default ResponseSuccess;
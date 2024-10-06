import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { useForm } from '@formspree/react';
import ResponseSuccess from "./ResponseSuccess";

const Footer = () => {
    const [state, handleSubmitFormspree] = useForm(process.env.REACT_APP_FORMSPREE_FORM_CODE);
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                {state.succeeded && <ResponseSuccess />}
                <Box id="feedback-form">
                    {!state.succeeded && <form onSubmit={handleSubmitFormspree}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="h5" gutterBottom color="primary">
                                    <Box sx={{ fontWeight: 'bold' }} display='inline'>
                                        Drop us a message:
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="name" label="Your Name" name="name" variant="outlined" required style={{ marginBottom: '10px' }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="email" label="E-mail Address" name="email" type="email" required variant="outlined" style={{ marginBottom: '10px' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="message" label="Message" variant="outlined" name="message" fullWidth multiline required style={{ marginBottom: '10px' }} />
                            </Grid>
                            {state.succeeded && <Typography style={{ color: 'green' }}>Your response has been recorded successfully!</Typography>}
                            <Grid item xs={12}>
                                <Button type="submit" disabled={false} variant="contained" color="primary" size="large" fullWidth>
                                    SEND US A MESSAGE
                                </Button>
                            </Grid>
                        </Grid>
                    </form>}
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper id="sitemap" style={{ marginLeft: '30px', height: '90%', padding: '20px' }} elevation={9}>
                    <Typography variant="h5" gutterBottom color="primary">
                        <Box sx={{ fontWeight: 'bold' }} display='inline'>
                            Sitemap
                        </Box>
                    </Typography>
                    <Link href="https://github.com/shravan20/github-readme-quotes" display="block" style={{ marginBottom: '10px' }} color="textSecondary">
                        About Us
                    </Link>
                    <Link href="mailto:shravan@ohmyscript.com" display="block" style={{ marginBottom: '10px' }} color="textSecondary">
                        Contact Us
                    </Link>
                    <Link href="https://github.com/shravan20/github-readme-quotes/blob/main/LICENSE" display="block" style={{ marginBottom: '10px' }} color="textSecondary">
                        Terms and Conditions
                    </Link>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Footer;
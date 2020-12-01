import React, { useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import TemplateCard from '../../organisms/TemplateCard';
import { themes, animations, layouts } from '../../../config/cardTemplate';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Home = () => {

    const [theme, setTheme] = useState(themes[0]);
    const [animation, setAnimation] = useState(animations[0]);
    const [layout, setLayout] = useState(layouts[0]);

    return (
        <React.Fragment>
            <Typography variant='h5' align='center' component='h2' style={{margin:'20px'}}>Make your own personalised style for the Quotes</Typography>

            <Grid
                container
                alignItems="center"
                spacing={3}
            >

                <Grid item xs={12} sm={4}>
                    <Autocomplete
                        id="combo-box-demo"
                        options={themes}
                        value={theme}
                        style={{ width: 300 }}
                        onChange={(_event, newValue) => {
                            if(newValue != null)
                                setTheme(newValue)
                            }}
                        renderInput={(params) => <TextField {...params} label="Theme" variant="outlined" />}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Autocomplete
                        id="combo-box-demo"
                        options={layouts}
                        value={layout}
                        onChange={(_event, newValue) => {
                            if(newValue != null)
                                setLayout(newValue)
                            }}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Layout" variant="outlined" />}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Autocomplete
                        id="combo-box-demo"
                        options={animations}
                        value={animation}
                        onChange={(_event, newValue) => {
                            if(newValue != null)
                                setAnimation(newValue)
                            }}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Animation" variant="outlined" />}
                    />

                </Grid>
                
            </Grid>
            <TemplateCard theme={theme} animation={animation} layout={layout} />
        </React.Fragment>
    )
}

export default Home;
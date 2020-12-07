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
            <Typography variant='h5' align='center' component='h2' style={{ margin: '20px' }}>Make your own personalised style for the Quotes</Typography>

            <Grid
                container
                alignItems="center"
                spacing={3}
            >

                <Grid item xs={12} sm={6} md={4}>
                    <Autocomplete
                        id="theme"
                        options={themes}
                        value={theme}
                        style={{ width: 300 }}
                        onChange={(_event, newValue) => {
                            if (newValue != null)
                                setTheme(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="Theme" variant="outlined" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Autocomplete
                        id="layout"
                        options={layouts}
                        value={layout}
                        onChange={(_event, newValue) => {
                            if (newValue != null)
                                setLayout(newValue)
                        }}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Layout" variant="outlined" />}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Autocomplete
                        id="animation"
                        options={animations}
                        value={animation}
                        onChange={(_event, newValue) => {
                            if (newValue != null)
                                setAnimation(newValue)
                        }}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Animation" variant="outlined" />}
                    />

                </Grid>

            </Grid>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <TemplateCard theme={theme} animation={animation} layout={layout} />
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center">Other layouts</Typography>
                    {console.log("All Layouts ", layouts)}
                </Grid>
                {
                    layouts.filter((item) => item !== layout).map((restLayout) => {
                        return (
                            <Grid key={restLayout} item xs={12} sm={12} md={6}>
                                <TemplateCard theme={theme} animation={animation} layout={restLayout} />
                            </Grid>
                        )
                    })
                }
            </Grid>

        </React.Fragment>
    )
}

export default Home;
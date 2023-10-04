import React, { useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import TemplateCard from '../../organisms/TemplateCard';
import { themes, animations, layouts, fonts, colorValues } from '../../../config/cardTemplate';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ContributorsCard from '../../ContributorsCard/ContributorCard'
const Home = () => {

    const [theme, setTheme] = useState(themes[0]);
    const [animation, setAnimation] = useState(animations[0]);
    const [layout, setLayout] = useState(layouts[0]);
    const [font, setFont] = useState(fonts[0]);
    const [fontColor, setFontColor] = useState("white");
    const [bgColor, setBgColor] = useState("black");

    return (
        <React.Fragment>
            <Typography variant='h5' align='center' component='h2' style={{ margin: '20px', padding: '25px' }}>Make your own personalised style for the Quotes</Typography>
            
            <Grid
                container
                alignItems="center"
                spacing={3}
            >

                <Grid item xs={12} sm={6} lg={3}>
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
                <Grid item xs={12} sm={6} lg={3}>
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
                <Grid item xs={12} sm={6} lg={3}>
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

                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        id="font"
                        options={fonts}
                        value={font}
                        style={{ width: 300 }}
                        onChange={(_event, newValue) => {
                            if (newValue != null)
                                setFont(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="Font" variant="outlined" />}
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        id="font-color"
                        options={colorValues}
                        value={fontColor}
                        style={{ width: 300 }}
                        onChange={(_event, newValue) => {
                            if (newValue != null)
                              setFontColor(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="Font color" placeholder="Select a color" variant="outlined" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        id="bg-color"
                        options={colorValues}
                        value={bgColor}
                        style={{ width: 300 }}
                        onChange={(_event, newValue) => {
                            if (newValue != null)
                              setBgColor(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="Background color" placeholder="Select a color" variant="outlined" />}
                    />
                </Grid>

            </Grid>

            <Grid container spacing={4}>
                <Grid item xs={12} style={{ margin: '20px' }}>
                    <TemplateCard theme={theme} animation={animation} layout={layout} font={font} fontColor={fontColor} bgColor={bgColor} />
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center">Other layouts</Typography>
                </Grid>
                {
                    layouts.filter((item) => item !== layout).map((restLayout) => {
                        return (
                            <Grid key={restLayout} item xs={12} sm={12} md={6}>
                                <TemplateCard theme={theme} animation={animation} layout={restLayout} font={font} fontColor={fontColor} bgColor={bgColor}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <ContributorsCard  />
        </React.Fragment>
    )
}

export default Home;
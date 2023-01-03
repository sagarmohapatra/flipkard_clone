import React from 'react'
import { imageURL } from ".././Contant/data"
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material'
// import 



let theme = createTheme();
theme = responsiveFontSizes(theme);

const Wrraper = styled(Grid)`
margin-top:10px;
justify-content:space-between;
`
const Image = styled("img")(({ theme }) => ({
    marginTop: 10,
    width: "100%",
    justifyContent: 'space-between',
    [theme.breakpoints.down("md")]: {
        objectFit: "cover",
        height: 120,
    }
}))
const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
            <ThemeProvider theme={theme}>

                <Wrraper lg={12} md={12} sm={12} container>
                    {
                        imageURL.map(img => (
                            <Grid item lg={4} md={4} sm={12} >

                                <img src={img} alt="img" style={{ width: "100%" }} />
                                {/* </ThemeProvider> */}

                            </Grid>
                        ))
                    }
                </Wrraper>

                <Image src={url} alt="covid" />
            </ThemeProvider>
        </>
    )
}

export default MidSection
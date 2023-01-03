
import React from 'react'
import Slide from './Slide'
import { Box } from '@mui/system'
import styled from '@emotion/styled'
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material'


let theme = createTheme();
theme = responsiveFontSizes(theme);
const Component = styled(Box)`
display:flex;
`
const LeftComponent = styled(Box)(({ theme }) => ({
    width: "83%",
    [theme.breakpoints.down("lg")]: {
        width: "100%"
    }
}))
const RightComponent = styled(Box)(({ theme }) => ({
    background: "#ffffff",
    padding: "5",
    marginTop: "10",
    marginLeft: "10",
    width: "17%",
    textAalign: "center",
    [theme.breakpoints.down("lg")]: {
        display: "none"
    }
}));
const MideSlide = ({ products, title, time }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <ThemeProvider theme={theme}>
            <Component>
                <LeftComponent>
                    <Slide products={products} title={title} timer={time} />
                </LeftComponent>
                <RightComponent>
                    <img src={adURL} alt="ad" style={{ width: 217 }} />
                </RightComponent>
            </Component>
        </ThemeProvider>
    )
}

export default MideSlide
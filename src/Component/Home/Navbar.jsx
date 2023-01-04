import React from 'react'
import { Box, styled } from '@mui/system'
import { navData } from '../Contant/data'
import { Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material'


let theme = createTheme();
theme = responsiveFontSizes(theme);

const WrapImage = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "55px 50px 0 50px",
    justifyContent: "space-between",
    // overflow: "overlay",

    [theme.breakpoints.down("md")]: {
        margin: 0
    }
}))
const SingleImage = styled(Box)`
padding:12px 8px;
text-align:center
`

const Paragraph = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`
const Navbar = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box style={{ background: "#fff" }}>
                <WrapImage>
                    {
                        navData.map(data => (
                            <SingleImage>
                                <img src={data.url} style={{ width: 64 }} />
                                <Paragraph>{data.text}</Paragraph>
                            </SingleImage>
                        ))
                    }
                </WrapImage>
            </Box>
        </ThemeProvider>
    )
}

export default Navbar
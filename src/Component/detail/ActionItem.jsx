import React from 'react'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material'

let theme = createTheme();
theme = responsiveFontSizes(theme);

const LeftContainer = styled(Box)(({ theme }) => ({
    minwidth: "40%",
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("lg")]: {
        padding: "20px 40px"
    }
}))



const Img = styled("img")({
    padding: "15px",
    width: "95%"


})
const StyleButton = styled(Button)(({ theme }) => ({


    width: "48%",
    height: "50px",
    borderRadious: "2px",
    [theme.breakpoints.down("lg")]: {
        width: "46%"
    },
    [theme.breakpoints.down("sm")]: {
        width: "48%"
    }
}))
const ActionItem = ({ product }) => {
    return (
        <ThemeProvider theme={theme}>
            <LeftContainer>
                <Box style={{ padding: "15px 20px", border: "1px solid #f0f0f0" }}>
                    <Img src={product.detailUrl} alt="product" />
                </Box>
                <StyleButton variant='contained' style={{ marginRight: 10, background: "#ff9f00" }}><ShoppingCartIcon />Add to card</StyleButton>
                <StyleButton variant='contained' style={{ background: "#fb541b" }}><FlashOnIcon />Buy Now</StyleButton>
            </LeftContainer>
        </ThemeProvider>
    )
}

export default ActionItem
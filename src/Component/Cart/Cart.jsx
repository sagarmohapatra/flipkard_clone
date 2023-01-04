import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import TotalView from './TotalView'
import Button from '@mui/material/Button';
import EmptyCard from './EmptyCard'

import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material'




let theme = createTheme();
theme = responsiveFontSizes(theme);


const Container = styled(Grid)(({ theme }) => ({
    padding: "30px 135px",
    [theme.breakpoints.down("md")]: {
        padding: "15px 0"
    }
}))


const Header = styled(Box)`
padding:15px 24px;
background:#fff;
`

const ButtonWrraper = styled(Box)`
padding:15px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0/10%);
border-top:1px solid #f0f0f0;
`

const StyledButton = styled(Button)`
display:flex;
margin-left:auto;
${'' /* background:#fb641b; */}
${'' /* color:#fff; */}
height:51px;
width:250px;
`

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down("sm")]: {
        marginBottom: 15
    }
}))


const Cart = () => {
    const { cartitems } = useSelector(state => state.cart)
    console.log(cartitems);
    return (
        <ThemeProvider theme={theme}>
            <>

                {
                    cartitems.length ?
                        <Container container>
                            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                                <Header>
                                    <Typography>My Card({cartitems.length})</Typography>
                                </Header>
                                {
                                    cartitems.map(item => (
                                        <CartItem item={item} />
                                    ))
                                }
                                <ButtonWrraper>
                                    <StyledButton style={{ color: "#fff", background: "#fb641b" }}> Place Order</StyledButton>
                                </ButtonWrraper>
                            </LeftComponent>
                            <Grid item lg={3} md={3} sm={12} xs={12}>
                                <TotalView cartitems={cartitems} />
                            </Grid>
                        </Container>
                        : <EmptyCard />
                }

            </>
        </ThemeProvider>
    )
}

export default Cart
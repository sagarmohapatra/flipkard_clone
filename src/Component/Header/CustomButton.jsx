import React, { useState, useContext } from 'react'
import { Box } from '@mui/system'
import { Button, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LoginDialog from '../Login/LoginDialog';
import DataContext from "../Context/DataProvider"



const Wrapper = styled(Box)`
display:flex;
margin:0 3% 0 auto;
& > button, & >p, &>div{
    margin-right:40px;
    font-size:14px;
    align-item:center 
}
`
const Container = styled(Box)`
display:flex
`

const LoginButton = styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none;
padding:5px 40px;
border-radious:2px; 
box-shadow:none;
font-weight:600
`
const CustomButton = () => {
    const { accounts, setaccounts } = useContext(DataContext)
    const [open, setopen] = React.useState(false)
    const openDialog = () => {
        setopen(true)
        // toggleAccount()
    }
    return (
        <Wrapper>
            {
                accounts ? <Typography>{accounts}</Typography> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }

            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container style={{ marginTop: 3 }}>
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setopen={setopen} />
        </Wrapper>
    )
}

export default CustomButton
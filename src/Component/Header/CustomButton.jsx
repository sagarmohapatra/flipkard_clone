import React, { useContext } from 'react'
import { Box } from '@mui/system'
import { Button, Typography, styled, Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LoginDialog from '../Login/LoginDialog';
import { DataContext } from "../../Context/DataProvider"
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Wrapper = styled(Box)`
display:flex;
margin:0 3% 0 auto;
& > button, & >p, &>div{
    margin-right:40px;
    font-size:14px;
    align-item:center 
}
`
const Container = styled(Link)`
display:flex;
textDecoration:none;
color:inherit;
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

    const [open, setopen] = React.useState(false)
    const openDialog = () => {
        setopen(true)
        // toggleAccount()
    }
    const { accounts, setaccounts } = useContext(DataContext)
    const { cartitems } = useSelector(state => state.cart)

    console.log(cartitems.length);
    return (
        <Wrapper>
            {
                accounts ? <Profile /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }

            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container style={{ marginTop: 3 }} to="/cart">
                <Badge badgeContent={cartitems?.length} color="secondary" />
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setopen={setopen} />
        </Wrapper>
    )
}

export default CustomButton
import React from 'react'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { addEllipsis } from '../../utils/common_utils'
import ButtedGroup from './ButtonGroup'
import { useDispatch } from 'react-redux'
import { removeFromCard } from '../../redux/action/cartAction'
const Component = styled(Box)`
border-top:1px solid #f0f0f0;
display:flex;
background:#fff;
`
const LeftComponent = styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`
const SmallText = styled(Typography)`
color:#878787;
font--size:14px;
margin-top:10px
`
const Remove = styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
font-weight:600;

`
const CartItem = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const dispatch = useDispatch()
    const removeItemfromCard = (id) => {
        dispatch(removeFromCard(id))
    }
    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt="product" style={{ height: 110, width: 110 }} />
                <ButtedGroup />
            </LeftComponent>
            <Box style={{ margin: "20px" }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component="span">
                        <img src={fassured} alt="flipkard" style={{ width: 50, marginLeft: 10 }} />
                    </Box> </SmallText>

                <Typography style={{ margin: "20px 0" }}>
                    <Box component="span" style={{ fontwight: 600, fontSize: 18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: "#878787" }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: "#388E3C" }}>{item.price.discount}</Box>
                </Typography>
                <Remove onClick={() => removeItemfromCard(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem 
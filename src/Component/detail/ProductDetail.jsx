import React from 'react'
import { Box } from '@mui/system'
import { Badge, Table, Typography } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import styled from '@emotion/styled';
import { TableBody, TableCell, TableRow } from '@mui/material';
const SmallText = styled(Box)`
font-size:14px;
vertical-align:baseline;
& > p{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`
const StyleBadge = styled(LocalOfferIcon)`
margin-right:10px;
color:#00cc00;
font-size:15px;

`
const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
& >td{
    font-size:14px;
    margin-top:10px;
}
`
const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 1000))
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>8 Ratting & 1 Reviews
                <Box component="span"><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>

            <Typography>
                <Box component="span" style={{ fontsize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: "#878787" }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: "#388E3C" }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyleBadge />Get extra 20% off upto ₹50 on 1 item(s) T&C </Typography>
                <Typography><StyleBadge />Special PriceGet extra 1% off (price inclusive of cashback/coupon)T&C</Typography>
                <Typography><StyleBadge />Buy this Product and Get Extra ₹500 Off on Two-WheelersT&C</Typography>
                <Typography><StyleBadge />Buy this product and get upto ₹500 off on Flipkart FurnitureKnow More</Typography>
                <Typography><StyleBadge />EMI starting from ₹1,948/month</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
                        <TableCell style={{ fontweight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
                        <TableCell >No Warranty</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Seller</TableCell>
                        <TableCell >
                            <Box component="span" style={{ color: "#2874f0" }}>SuperComNet</Box>
                            <Typography>GST invoice avilable</Typography>
                            <Typography>View more seller ₹{product.price.cost} </Typography>
                        </TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} alt="flipkardpoints" />
                        </TableCell>

                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Description</TableCell>
                        <TableCell >{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail
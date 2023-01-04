import styled from '@emotion/styled'
import { Typography, Box } from '@mui/material'
import React, { useEffect } from 'react'

const Heading = styled(Box)`
padding:15px 24px;
background:#fff;
border-button: 1px solid #f0f0f0;
`

const ActualHeading = styled(Typography)`
color:#878787;
`
const Container = styled(Box)`
padding:15px 24px;
background:#fff;
& > p {
    margin-bottom:20px;
    font-size:14px;

}
& >h6{
    margin-bottom:20px;
}
`
const Price = styled(Box)`
float:right;
`

const Discount = styled(Typography)`
color:green;
font-weight:500;


`
const TotalView = ({ cartitems }) => {
    const [price, setprice] = React.useState(0)
    const [discount, setdiscount] = React.useState(0)
    useEffect(() => {
        totalAmount();

    }, [cartitems])

    const totalAmount = () => {
        let price = 0, discount = 0;
        cartitems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        })
        setprice(price)
        setdiscount(discount)
    }
    return (
        <Box>
            <Heading>
                <ActualHeading>PRICE DETAILS</ActualHeading>
            </Heading>
            <Container>
                <Typography>Price({cartitems?.length}item)
                    <Price component="span">₹{price}</Price>
                </Typography>

                <Typography>Discount
                    <Price component="span">-₹{discount}</Price>
                </Typography>

                <Typography>Delivery charges
                    <Price component="span">₹40</Price>
                </Typography>

                <Typography variant='h6'>Total Amount
                    <Price component="span">₹{price - discount + 40}</Price>
                </Typography>
                <Discount>You will save ₹{discount - 40} on this Order </Discount>
            </Container>
        </Box>
    )
}

export default TotalView
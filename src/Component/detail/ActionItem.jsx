import React from 'react'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/action/cartAction"
import { payUsingPaytm } from '../../service/api';
import { post } from "../../utils/paytm"
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
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = product
    const [quantity, setquantity] = React.useState(1)

    const additemToCart = () => {
        dispatch(addToCart(id, quantity))
        navigate("/cart")
    }
    const buyNow = async () => {
        const response = await payUsingPaytm({ amount: 456, email: "sagarkumar5@gmail.com" })
        const information = {
            action: "https://securegw-stage.paytm.in/order/process",
            params: response
        }
        post(information)
    }
    return (
        <ThemeProvider theme={theme}>
            <LeftContainer>
                <Box style={{ padding: "15px 20px", border: "1px solid #f0f0f0" }}>
                    <Img src={product.detailUrl} alt="product" />
                </Box>
                <StyleButton variant='contained' style={{ marginRight: 10, background: "#ff9f00" }} onClick={() => additemToCart()}><ShoppingCartIcon />Add to card</StyleButton>
                <StyleButton variant='contained' style={{ background: "#fb541b" }} onClick={() => buyNow()}><FlashOnIcon />Buy Now</StyleButton>
            </LeftContainer>
        </ThemeProvider>
    )
}

export default ActionItem
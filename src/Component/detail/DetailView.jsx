import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/action/productAction';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import ActionItem from './ActionItem';
import styled from '@emotion/styled';
import ProductDetail from './ProductDetail';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material'


let theme = createTheme();
theme = responsiveFontSizes(theme);

const Component = styled(Box)`
background:#F2F2F2;
`

const Container = styled(Grid)(({ theme }) => ({
    background: "#FFFFFF",
    display: "flex",
    [theme.breakpoints.down("md")]: {
        margin: 0,
    }
}))

const RightContainer = styled(Grid)`
margin-top:50px
`
const DetailView = () => {

    const dispatch = useDispatch();
    const { id } = useParams()

    const getProductDetail = useSelector(state => state.getProductDetails)
    const { loading, product } = getProductDetail
    console.log(getProductDetail);
    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, loading, product])
    return (
        <ThemeProvider theme={theme}>
            <Component>
                {
                    product && Object.keys(product).length &&
                    <Container container>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product={product} />
                        </Grid>
                        <RightContainer item lg={8} md={8} sm={8} xs={12}>

                            <ProductDetail product={product} />
                        </RightContainer>
                    </Container>
                }
            </Component>
        </ThemeProvider>
    )
}

export default DetailView
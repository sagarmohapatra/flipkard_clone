import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { styled } from '@mui/system'
import { Box } from '@mui/material'
import { getProducts } from '../../redux/action/productAction';
import { useDispatch, useSelector } from 'react-redux'
const Component = styled(Box)`
padding:20px 10px;
background:#ffffff
`
const Home = () => {
    const getProduct = useSelector(state => state.getProducts) // getProduct from store
    const { products } = getProduct
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())  // getProduct from action
    }, [dispatch])
    return (
        <>
            <Navbar />
            <Component>
                <Banner />
            </Component>

        </>
    )
}

export default Home
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { styled } from '@mui/system'
import { Box } from '@mui/material'
import { getProducts } from '../../redux/action/productAction';
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import MideSlide from './MideSlide'
import MidSection from './MidSection'
const Component = styled(Box)`
padding:20px 10px;
background:#ffffff
`
const Home = () => {
    const getProduct = useSelector(state => state.getProducts) // getProduct from store
    const { products } = getProduct
    // console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())  // getProduct from action
    }, [dispatch])
    return (
        <>
            <Navbar />
            <Component>
                <Banner />
                <MideSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection />
                <Slide products={products} title="Discount for You" timer={false} />
                <Slide products={products} title="Suggesting Item" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <Slide products={products} title="Recommended Item" timer={false} />
                <Slide products={products} title="Treding Offer" timer={false} />
                <Slide products={products} title="Season's Top Picks" timer={false} />
                <Slide products={products} title="Top Deals on Accessories" timer={false} />
            </Component>

        </>
    )
}

export default Home